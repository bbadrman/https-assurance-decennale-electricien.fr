<?php

require_once __DIR__.'/vendor/autoload.php';

use App\Entity\Lead;
use Doctrine\ORM\EntityManagerInterface;

// Bootstrap Doctrine
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

$paths = [__DIR__.'/src/Entity'];
$isDevMode = true;

$dbParams = array(
    'driver'   => 'pdo_mysql',
    'host'     => 'localhost',
    'user'     => 'db',
    'password' => 'db',
    'dbname'   => 'db',
);

$config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);
$entityManager = EntityManager::create($dbParams, $config);

// Create a test lead
$lead = new Lead();
$lead->setNom('Test');
$lead->setPrenom('John');
$lead->setEmail('test@example.com');
$lead->setTele('0123456789');

$entityManager->persist($lead);
$entityManager->flush();

echo "Lead created with ID: " . $lead->getId() . "\n";
