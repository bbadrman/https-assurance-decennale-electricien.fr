<?php

namespace App\Controller;

use App\Entity\Lead;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;

#[Route('/api')]
class LeadController extends AbstractController
{
    #[Route('/leads', name: 'lead_create', methods: ['POST'])]
    public function createLead(Request $request, EntityManagerInterface $em, HttpClientInterface $httpClient): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Validation
        $errors = [];

        // Always required fields
        $requiredAlways = ['nom', 'prenom', 'raisonSociale', 'demarrageActivite', 'codePostal', 'email', 'tele'];
        foreach ($requiredAlways as $field) {
            if (empty($data[$field])) {
                $errors[] = "Le champ $field est requis";
            }
        }

        // Email validation
        if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Email invalide";
        }

        // Conditional validation: if demarrageActivite = "non", insurance history fields required
        if (isset($data['demarrageActivite']) && $data['demarrageActivite'] === 'non') {
            // activiteAssuree and assuranceResilie are always required when demarrageActivite = "non"
            $conditionalRequired = ['activiteAssuree', 'assuranceResilie'];
            foreach ($conditionalRequired as $field) {
                if (empty($data[$field])) {
                    $errors[] = "Le champ $field est requis";
                }
            }

            // Motif résiliation required only if activiteAssuree != "non" AND assuranceResilie = "oui"
            if (isset($data['activiteAssuree']) && $data['activiteAssuree'] !== 'non' &&
                isset($data['assuranceResilie']) && $data['assuranceResilie'] === 'oui') {
                if (empty($data['motifResiliation'])) {
                    $errors[] = "Le motif de résiliation est requis";
                }
            }
        }

        if (!empty($errors)) {
            return new JsonResponse([
                'success' => false,
                'errors' => $errors
            ], 400);
        }

        $lead = new Lead();
        $lead->setNom($data['nom'] ?? null);
        $lead->setPrenom($data['prenom'] ?? null);
        $lead->setRaisonSociale($data['raisonSociale'] ?? null);
        $lead->setDemarrageActivite($data['demarrageActivite'] ?? null);
        $lead->setActiviteAssuree($data['activiteAssuree'] ?? null);
        $lead->setAssuranceResilie($data['assuranceResilie'] ?? null);
        $lead->setMotifResiliation($data['motifResiliation'] ?? null);
        $lead->setCodePostal($data['codePostal'] ?? null);
        $lead->setEmail($data['email'] ?? null);
        $lead->setTele($data['tele'] ?? null);

        $em->persist($lead);
        $em->flush();

        $this->forwardToExternalApi($httpClient, $data);

        return new JsonResponse([
            'success' => true,
            'message' => 'Lead créé avec succès'
        ], 201);
    }

    private function forwardToExternalApi(HttpClientInterface $httpClient, array $data): void
    {
        try {
            $httpClient->request('POST', 'https://aksam.azurewebsites.net/api/prospects', [
                'json' => $data,
            ]);
        } catch (\Throwable $e) {
        }
    }
}