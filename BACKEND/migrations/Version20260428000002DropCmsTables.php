<?php

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260428000002DropCmsTables extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Drop CMS tables (page, section, global_settings) and clean up unused infrastructure';
    }

    public function up(Schema $schema): void
    {
        // Drop in order: section (FK to page), then page, then global_settings
        $this->addSql('DROP TABLE IF EXISTS section');
        $this->addSql('DROP TABLE IF EXISTS page');
        $this->addSql('DROP TABLE IF EXISTS global_settings');
    }

    public function down(Schema $schema): void
    {
        // Note: Recreating these tables with proper structure would require more extensive SQL.
        // This migration is not intended to be rolled back in production.
        // For dev environments, you can manually restore from backup if needed.
    }
}
