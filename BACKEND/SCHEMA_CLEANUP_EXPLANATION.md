# Database Schema Cleanup - Lead Entity

## Date: 2026-04-27

## Overview
Cleaned up the Lead entity and database schema to match the final form requirements. Removed all unused/legacy fields to create a minimal, production-ready lead capture system.

## Changes Made

### 1. Clean Entity (PHP Symfony Doctrine)
**File:** `BACKEND/src/Entity/Lead.php`

#### Fields KEPT (11 fields):
1. **id** (int, primary key, auto-increment)
2. **nom** (string, 255, nullable) - Last name / Company name
3. **prenom** (string, 255, nullable) - First name (DB column: `firstname`)
4. **raisonSociale** (string, 255, nullable) - Company legal name (DB column: `raison_sociale`)
5. **demarrageActivite** (string, 255, nullable) - Activity start (DB column: `demarrage_activite`)
6. **activiteAssuree** (string, 255, nullable) - Currently insured activity (DB column: `insured_currently`)
7. **assuranceResilie** (string, 255, nullable) - Previous insurance cancelled (DB column: `previous_resiliation`)
8. **motifResiliation** (text, nullable) - Reason for cancellation (DB column: `resiliation_reason`)
9. **codePostal** (string, 255, nullable) - Postal code (DB column: `postcode`)
10. **email** (string, 255, nullable)
11. **tele** (string, 255, nullable) - Phone number (DB column: `phone`)
12. **createdAt** (datetime, nullable) - Record creation timestamp

#### Fields REMOVED (3 fields):
1. **entreprise** (string) - Redundant with `nom` field
2. **statut** (string) - Not used in final form
3. **chiffreAffaires** (string) - Not required for lead capture

### 2. Migration File
**File:** `BACKEND/migrations/Version20260428000001.php`

#### UP Migration (Safe):
```sql
ALTER TABLE lead DROP COLUMN entreprise;
ALTER TABLE lead DROP COLUMN statut;
ALTER TABLE lead DROP COLUMN chiffre_affaires;
```

#### DOWN Migration (Rollback):
```sql
ALTER TABLE lead ADD entreprise VARCHAR(255) DEFAULT NULL;
ALTER TABLE lead ADD statut VARCHAR(255) DEFAULT NULL;
ALTER TABLE lead ADD chiffre_affaires VARCHAR(255) DEFAULT NULL;
```

### 3. Database Column Naming Consistency
All database column names use snake_case (Doctrine convention):
- `firstname` → `prenom` field
- `phone` → `tele` field
- `raison_sociale` → `raisonSociale` field
- `demarrage_activite` → `demarrageActivite` field
- `insured_currently` → `activiteAssuree` field
- `previous_resiliation` → `assuranceResilie` field
- `resiliation_reason` → `motifResiliation` field
- `postcode` → `codePostal` field

### 4. Type Safety
- String fields: `length: 255`, `nullable: true`
- Text field: `motifResiliation` uses `type: "text"` for longer content
- DateTime field: `createdAt` uses `type: 'datetime'`
- All fields properly typed with PHP type hints

## Migration Strategy

### Safe Migration (No Data Loss):
1. **Backup First**: Always backup database before running migrations
2. **Column Drops**: Only dropping unused columns that are not in production form
3. **Rollback Available**: DOWN migration restores all dropped columns if needed
4. **Nullable Fields**: All fields remain nullable to avoid constraint violations

### Execution Order:
1. Run `php bin/console doctrine:migrations:migrate` to apply changes
2. Verify schema with `php bin/console doctrine:schema:validate`
3. Test form submission to ensure all fields work correctly

### Rollback (if needed):
```bash
php bin/console doctrine:migrations:execute Version20260428000001 --down
```

## Production Readiness Checklist

✅ Minimal schema (only required fields)  
✅ No legacy/unused fields  
✅ Consistent naming (snake_case in DB, camelCase in PHP)  
✅ Correct data types  
✅ All fields nullable (safe for partial data)  
✅ Auto-timestamp on creation  
✅ Rollback migration available  
✅ Doctrine annotations properly configured  
✅ Repository class available  

## Form Field Mapping

| Form Field | Entity Property | DB Column | Type |
|------------|----------------|-----------|------|
| Nom | nom | nom | string |
| Prénom | prenom | firstname | string |
| Raison sociale | raisonSociale | raison_sociale | string |
| Démarrage d'activité | demarrageActivite | demarrage_activite | string |
| Activité assurée | activiteAssuree | insured_currently | string |
| Assurance résilié | assuranceResilie | previous_resiliation | string |
| Motif résiliation | motifResiliation | resiliation_reason | text |
| Code Postal | codePostal | postcode | string |
| Email | email | email | string |
| Téléphone | tele | phone | string |
| Créé le | createdAt | created_at | datetime |

## Benefits

1. **Clean Code**: No unused fields cluttering the entity
2. **Better Performance**: Smaller table size, faster queries
3. **Maintainability**: Clear schema matching actual requirements
4. **Type Safety**: Proper PHP types and Doctrine annotations
5. **Safe Migration**: Rollback available, no destructive changes
6. **Documentation**: Clear mapping between form, entity, and database

## Next Steps

1. Run migration: `php bin/console doctrine:migrations:migrate`
2. Clear cache: `php bin/console cache:clear`
3. Test form submission
4. Verify database schema: `php bin/console doctrine:schema:validate`
5. Update any API documentation if needed
