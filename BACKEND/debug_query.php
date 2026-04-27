<?php

require_once __DIR__.'/vendor/autoload.php';

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use App\Entity\Lead;

$paths = [__DIR__.'/src/Entity'];
$isDevMode = true;

$dbParams = array(
    'driver'   => 'pdo_mysql',
    'host'     => '127.0.0.1',
    'port'     => '3306',
    'user'     => 'db',
    'password' => 'db',
    'dbname'   => 'db',
    'unix_socket' => '/tmp/mysql.sock',
);

$config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);

// Enable SQL logging
$config->setSQLLogger(new \Doctrine\DBAL\Logging\EchoSQLLogger());

$entityManager = EntityManager::create($dbParams, $config);

// Create a test lead
$lead = new Lead();
$lead->setNom('Test');
$lead->setPrenom('John');
$lead->setEmail('test3@example.com');
$lead->setTele('0123456789');

$entityManager->persist($lead);
$entityManager->flush();

echo "\n\nLead created with ID: " . $lead->getId() . "\n";
