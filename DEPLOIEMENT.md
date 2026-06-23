# Guide de deploiement - Assurance Decennale Electricien

## Fichiers a deployer via FTP

### Frontend (apres `npm run build` dans `frontend/`)

- `frontend/build/` -> tout le contenu vers le dossier public du serveur

### Backend

#### Fichiers de code

- `BACKEND/src/Controller/LeadController.php`
- `BACKEND/src/Entity/Lead.php`
- `BACKEND/config/packages/nelmio_cors.yaml`

#### Dependances

- `BACKEND/composer.json`
- `BACKEND/composer.lock`
- `BACKEND/vendor/` (tout le dossier, contient symfony/http-client)

## Etapes de deploiement

### 1. Build du frontend

```bash
cd frontend
npm run build
```

### 2. Upload FTP

1. Uploader le contenu de `frontend/build/` vers la racine publique du site
2. Uploader les fichiers backend listes ci-dessus vers le serveur

### 3. Vider le cache Symfony

Supprimer tout le contenu du dossier `BACKEND/var/cache/` sur le serveur via FTP.
Symfony recreera le cache automatiquement au prochain appel.

Si acces SSH disponible :

```bash
cd BACKEND
php bin/console cache:clear --env=prod
```

### 4. Base de donnees

Si la table `lead` n'existe pas encore, la creer via phpMyAdmin :

```sql
CREATE TABLE lead (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) DEFAULT NULL,
    firstname VARCHAR(255) DEFAULT NULL,
    raison_sociale VARCHAR(255) DEFAULT NULL,
    demarrage_activite VARCHAR(255) DEFAULT NULL,
    insured_currently VARCHAR(255) DEFAULT NULL,
    previous_resiliation VARCHAR(255) DEFAULT NULL,
    resiliation_reason TEXT DEFAULT NULL,
    postcode VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(255) DEFAULT NULL,
    created_at DATETIME DEFAULT NULL
);
```

## Architecture des flux

```
Navigateur (formulaire)
    |
    | POST /api/leads
    v
Backend Symfony (assurance-decennale-electricien.fr)
    |
    |-- 1. Sauvegarde en BDD locale (table lead)
    |-- 2. Transmet a aksam.azurewebsites.net/api/prospects (cote serveur)
    |
    v
Reponse JSON au navigateur
```

## Points de verification apres deploiement

- [ ] Le formulaire se soumet sans erreur
- [ ] Les donnees apparaissent dans la table `lead` (phpMyAdmin)
- [ ] Les donnees apparaissent dans l'API aksam (`https://aksam.azurewebsites.net/api/prospects`)
- [ ] Le cache Symfony a bien ete vide
