<?php

namespace App\Service;

use App\Entity\Lead;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Psr\Log\LoggerInterface;

class CrmService
{
    private HttpClientInterface $client;
    private LoggerInterface $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->client = HttpClient::create();
        $this->logger = $logger;
    }

    public function sendLeadToCrm(Lead $lead): bool
    {
        try {
            $response = $this->client->request('POST', 'https://aksam.azurewebsites.net/api/prospects', [
                'json' => [
                    'nom' => $lead->getNom(),
                    'prenom' => $lead->getPrenom(),
                    'raisonSociale' => $lead->getRaisonSociale(),
                    'demarrageActivite' => $lead->getDemarrageActivite(),
                    'activiteAssuree' => $lead->getActiviteAssuree(),
                    'assuranceResilie' => $lead->getAssuranceResilie(),
                    'motifResiliation' => $lead->getMotifResiliation(),
                    'codePostal' => $lead->getCodePostal(),
                    'email' => $lead->getEmail(),
                    'tele' => $lead->getTele(),
                ],
                'timeout' => 5,
            ]);

            $response->getStatusCode();
            return true;
        } catch (\Exception $e) {
            $this->logger->error('CRM integration failed: ' . $e->getMessage());
            return false;
        }
    }
}