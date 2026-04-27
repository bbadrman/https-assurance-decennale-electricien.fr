# Schema Cleanup Summary

## Files Modified

### 1. BACKEND/src/Entity/Lead.php
- **Status**: ✅ Cleaned and updated
- **Fields**: 11 required fields + 1 auto-generated
- **Removed**: entreprise, statut, chiffreAffaires
- **Lines**: 179 (was 222)

### 2. BACKEND/migrations/Version20260428000001.php
- **Status**: ✅ Created
- **Purpose**: Remove unused columns from lead table
- **Migration Type**: Safe (reversible)

### 3. BACKEND/SCHEMA_CLEANUP_EXPLANATION.md
- **Status**: ✅ Created
- **Purpose**: Detailed documentation of changes

## Database Schema Changes

### Columns REMOVED (3):
| Column | Type | Reason |
|--------|------|--------|
| entreprise | VARCHAR(255) | Redundant with nom field |
| statut | VARCHAR(255) | Not used in final form |
| chiffre_affaires | VARCHAR(255) | Not required |

### Columns KEPT (11 + id):
| Column | Type | Entity Property |
|--------|------|----------------|
| id | INT (PK, AI) | id |
| nom | VARCHAR(255) | nom |
| firstname | VARCHAR(255) | prenom |
| raison_sociale | VARCHAR(255) | raisonSociale |
| demarrage_activite | VARCHAR(255) | demarrageActivite |
| insured_currently | VARCHAR(255) | activiteAssuree |
| previous_resiliation | VARCHAR(255) | assuranceResilie |
| resiliation_reason | TEXT | motifResiliation |
| postcode | VARCHAR(255) | codePostal |
| email | VARCHAR(255) | email |
| phone | VARCHAR(255) | tele |
| created_at | DATETIME | createdAt |

## How to Apply Migration

```bash
cd BACKEND
php bin/console doctrine:migrations:migrate
```

## How to Rollback (if needed)

```bash
cd BACKEND
php bin/console doctrine:migrations:execute Version20260428000001 --down
```

## Validation

```bash
# Validate schema
php bin/console doctrine:schema:validate

# Check migration status
php bin/console doctrine:migrations:status
```

## Form Field Requirements (All Met)

✅ nom  
✅ prenom  
✅ raisonSociale  
✅ demarrageActivite  
✅ activiteAssuree  
✅ assuranceResilie  
✅ motifResiliation  
✅ codePostal  
✅ email  
✅ tele  
✅ createdAt  

## Production Readiness

✅ Minimal schema  
✅ No legacy fields  
✅ Type-safe  
✅ Properly documented  
✅ Reversible migration  
✅ Consistent naming  
✅ All fields nullable (safe)  
✅ Auto-timestamp enabled  

## Notes

- All fields remain nullable to avoid constraint violations during transition
- createdAt is auto-set in constructor
- Database column names use snake_case (Doctrine convention)
- Entity properties use camelCase (PHP convention)
- Migration is safe and reversible
