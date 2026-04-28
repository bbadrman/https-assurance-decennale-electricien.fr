<?php

namespace App\Controller;

use App\Entity\Lead;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api')]
class LeadController extends AbstractController
{
    #[Route('/leads', name: 'lead_create', methods: ['POST'])]
    public function createLead(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        // Debug logging
        error_log('Received data: ' . print_r($data, true));

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

        // Debug logging
        error_log('Before persist - Nom: ' . $lead->getNom() . ', Prenom: ' . $lead->getPrenom() . ', Email: ' . $lead->getEmail());
        $em->persist($lead);
        $em->flush();
        // Debug logging
        error_log('After flush - Lead ID: ' . $lead->getId());

        return new JsonResponse([
            'success' => true,
            'message' => 'Lead créé avec succès'
        ], 201);
    }

    // Lead list endpoint removed to protect lead privacy
    // Admin interface not included in this streamlined version

}