<?php

namespace App\Controller;

use App\Entity\Lead;
use App\Form\LeadType;
use App\Service\CrmService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET', 'POST'])]
    public function index(Request $request, EntityManagerInterface $em, CrmService $crmService): Response
    {
        $lead = new Lead();
        
        $form = $this->createForm(LeadType::class, $lead);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->validateConditionalFields($form, $lead);
            
            if ($form->isValid()) {
                $em->persist($lead);
                $em->flush();

                $crmService->sendLeadToCrm($lead);

                return $this->redirectToRoute('app_response');
            }
        }

        return $this->render('home/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    private function validateConditionalFields($form, Lead $lead): void
    {
        if ($lead->getDemarrageActivite() === 'non') {
            if (empty($lead->getActiviteAssuree())) {
                $form->get('activiteAssuree')->addError(new FormError('Le champ activiteAssuree est requis'));
            }
            if (empty($lead->getAssuranceResilie())) {
                $form->get('assuranceResilie')->addError(new FormError('Le champ assuranceResilie est requis'));
            }

            if ($lead->getActiviteAssuree() !== 'non' && $lead->getAssuranceResilie() === 'oui') {
                if (empty($lead->getMotifResiliation())) {
                    $form->get('motifResiliation')->addError(new FormError('Le motif de résiliation est requis'));
                }
            }
        }
    }
}