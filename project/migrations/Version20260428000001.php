<?php

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260428000001 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Clean up lead table - remove unused fields (entreprise, statut, chiffre_affaires) for minimal lead capture schema';
    }

    public function up(Schema $schema): void
    {
        // Remove unused fields to keep schema minimal
        // These fields are not part of the final form requirements
        $this->addSql('ALTER TABLE lead DROP COLUMN entreprise');
        $this->addSql('ALTER TABLE lead DROP COLUMN statut');
        $this->addSql('ALTER TABLE lead DROP COLUMN chiffre_affaires');
    }

    public function down(Schema $schema): void
    {
        // Restore removed fields if migration is rolled back
        $this->addSql('ALTER TABLE lead ADD entreprise VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE lead ADD statut VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE lead ADD chiffre_affaires VARCHAR(255) DEFAULT NULL');
    }
}
