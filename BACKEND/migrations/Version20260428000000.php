<?php

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260428000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add new fields to lead table for updated form';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE lead ADD nom VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE lead DROP COLUMN nom');
    }
}
