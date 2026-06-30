<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260427155042 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE IF EXISTS admin CHANGE role role VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE IF EXISTS admin RENAME INDEX email TO UNIQ_880E0D76E7927C74');
        $this->addSql('ALTER TABLE IF EXISTS page CHANGE is_published is_published TINYINT NOT NULL');
        $this->addSql('ALTER TABLE IF EXISTS page RENAME INDEX slug TO UNIQ_140AB620989D9B62');
        $this->addSql('ALTER TABLE IF EXISTS section RENAME INDEX fk_2d737aefc4663e4 TO idx_2d737aefc4663e4');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE admin CHANGE role role VARCHAR(50) DEFAULT \'admin\' NOT NULL');
        $this->addSql('ALTER TABLE admin RENAME INDEX uniq_880e0d76e7927c74 TO email');
        $this->addSql('ALTER TABLE page CHANGE is_published is_published TINYINT DEFAULT 0');
        $this->addSql('ALTER TABLE page RENAME INDEX uniq_140ab620989d9b62 TO slug');
        $this->addSql('ALTER TABLE section RENAME INDEX idx_2d737aefc4663e4 TO FK_2D737AEFC4663E4');
    }
}
