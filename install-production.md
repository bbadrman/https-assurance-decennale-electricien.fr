# Guide de déploiement en production

## Architecture du projet

```
decennale-electricien/
├── BACKEND/    → API Symfony (PHP) — serveur avec PHP + MySQL
└── frontend/   → React (CRA) — build statique servi par Apache/Nginx
```

---

## 1. Fichiers à héberger

### Frontend (React)
Vous ne déployez **pas** les sources React directement.  
Vous devez d'abord **builder** le projet, puis déployer uniquement le dossier `build/`.

```
frontend/build/          ← seul dossier à uploader sur le serveur web
```

> Le dossier `node_modules/`, `src/`, et les fichiers de config restent en local.

### Backend (Symfony)
Uploadez **tout** le dossier `BACKEND/` **sauf** :

```
BACKEND/.ddev/           ← environnement de développement local uniquement
BACKEND/var/cache/       ← sera regénéré automatiquement
BACKEND/var/log/         ← sera regénéré automatiquement
BACKEND/.env.dev         ← fichier dev uniquement
```

Fichiers obligatoires à avoir sur le serveur :
```
BACKEND/bin/
BACKEND/config/
BACKEND/migrations/
BACKEND/public/          ← point d'entrée Apache/Nginx (index.php)
BACKEND/src/
BACKEND/vendor/          ← dépendances PHP (généré par composer)
BACKEND/composer.json
BACKEND/composer.lock
BACKEND/symfony.lock
BACKEND/.env.local       ← à créer sur le serveur (voir section 3)
```

---

## 2. Prérequis serveur

| Composant | Version minimale |
|-----------|-----------------|
| PHP       | 8.0+            |
| MySQL / MariaDB | 10.4+ (MariaDB recommandé) |
| Composer  | 2.x             |
| Node.js   | 18+ (pour builder le frontend) |
| Apache ou Nginx | — |

---

## 3. Configuration des variables d'environnement

### Backend — créer le fichier `/BACKEND/.env.local` sur le serveur

Ce fichier **ne doit jamais être commité** dans git. À créer manuellement :

```dotenv
APP_ENV=prod
APP_SECRET=CHANGEZ_CE_SECRET_LONG_ET_ALEATOIRE_32_CHARS

# Adapter avec vos identifiants MySQL de production
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/NOM_BASE?serverVersion=10.11.2-MariaDB&charset=utf8mb4"

# URL de votre frontend en production
CORS_ALLOW_ORIGIN='^https?://(www\.)?votre-domaine\.fr$'

DEFAULT_URI=https://votre-domaine.fr
```

> **Générer APP_SECRET** : `php -r "echo bin2hex(random_bytes(16));"`

### Frontend — créer le fichier `/frontend/.env.production` avant le build

```dotenv
REACT_APP_API_URL=https://api.votre-domaine.fr/api
```

---

## 4. Déploiement — étapes dans l'ordre

### Étape 1 : Builder le frontend

```bash
cd frontend/
# Créer .env.production avec l'URL de votre API (voir section 3)
npm install
npm run build
# → Le dossier frontend/build/ est prêt à uploader
```

### Étape 2 : Uploader les fichiers

- Uploader `frontend/build/` → racine de votre domaine web (ex: `/var/www/html/`)
- Uploader `BACKEND/` → un sous-domaine dédié (ex: `api.votre-domaine.fr`) ou un sous-dossier

### Étape 3 : Installer les dépendances PHP

```bash
cd BACKEND/
composer install --no-dev --optimize-autoloader
```

### Étape 4 : Créer la base de données et exécuter les migrations

```bash
cd BACKEND/
php bin/console doctrine:database:create --if-not-exists
php bin/console doctrine:migrations:migrate --no-interaction
```

### Étape 5 : Optimiser Symfony pour la production

```bash
cd BACKEND/
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod
```

### Étape 6 : Permissions des dossiers

```bash
chmod -R 777 BACKEND/var/
```

---

## 5. Configuration Apache

### VirtualHost pour le Frontend (React)

```apache
<VirtualHost *:443>
    ServerName www.votre-domaine.fr
    DocumentRoot /var/www/html/frontend-build

    <Directory /var/www/html/frontend-build>
        Options -Indexes
        AllowOverride All
        Require all granted

        # Nécessaire pour React Router (SPA)
        FallbackResource /index.html
    </Directory>
</VirtualHost>
```

### VirtualHost pour le Backend (Symfony API)

```apache
<VirtualHost *:443>
    ServerName api.votre-domaine.fr
    DocumentRoot /var/www/html/backend/public

    <Directory /var/www/html/backend/public>
        AllowOverride None
        Order Allow,Deny
        Allow from All

        FallbackResource /index.php
    </Directory>

    # Cacher les fichiers sensibles
    <FilesMatch "^\.env">
        Require all denied
    </FilesMatch>
</VirtualHost>
```

### Configuration Nginx (alternative)

```nginx
# Frontend
server {
    listen 443 ssl;
    server_name www.votre-domaine.fr;
    root /var/www/html/frontend-build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Backend API
server {
    listen 443 ssl;
    server_name api.votre-domaine.fr;
    root /var/www/html/backend/public;

    location / {
        try_files $uri /index.php$is_args$args;
    }

    location ~ ^/index\.php(/|$) {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_split_path_info ^(.+\.php)(/.*)$;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_param DOCUMENT_ROOT $realpath_root;
        internal;
    }
}
```

---

## 6. CORS — configuration finale

Après avoir défini les URLs de production, mettre à jour `BACKEND/config/packages/nelmio_cors.yaml` :

```yaml
nelmio_cors:
    defaults:
        origin_regex: true
        allow_origin:
            - '^https?://(www\.)?votre-domaine\.fr$'
        allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE']
        allow_headers: ['Content-Type', 'Authorization']
        max_age: 3600
    paths:
        '^/api/': null
```

---

## 7. Checklist finale avant mise en ligne

- [ ] `APP_ENV=prod` dans `.env.local`
- [ ] `APP_SECRET` changé (pas la valeur dev)
- [ ] `DATABASE_URL` pointe vers la base de production
- [ ] `CORS_ALLOW_ORIGIN` contient uniquement le domaine de production
- [ ] `REACT_APP_API_URL` dans `.env.production` pointe vers l'API réelle
- [ ] `composer install --no-dev` exécuté
- [ ] Migrations exécutées (`doctrine:migrations:migrate`)
- [ ] Cache Symfony vidé et warmup (`cache:clear && cache:warmup`)
- [ ] Dossier `BACKEND/var/` en écriture (chmod 777)
- [ ] SSL/HTTPS activé sur les deux domaines
- [ ] Le fichier `.env.local` n'est **pas** accessible publiquement
- [ ] Dossier `.ddev/` non uploadé sur le serveur
