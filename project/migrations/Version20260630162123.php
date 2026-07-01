<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260630162123 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE lead (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL, firstname VARCHAR(255) DEFAULT NULL, raison_sociale VARCHAR(255) DEFAULT NULL, demarrage_activite VARCHAR(255) DEFAULT NULL, insured_currently VARCHAR(255) DEFAULT NULL, previous_resiliation VARCHAR(255) DEFAULT NULL, resiliation_reason LONGTEXT DEFAULT NULL, postcode VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, created_at DATETIME DEFAULT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE lead');
    }
}
