<?php

namespace App\Form;

use App\Entity\Lead;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class LeadType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'Le nom est requis'),
                ],
            ])
            ->add('prenom', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'Le prénom est requis'),
                ],
            ])
            ->add('raisonSociale', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'La raison sociale est requise'),
                ],
            ])
            ->add('demarrageActivite', ChoiceType::class, [
                'required' => true,
                'placeholder' => 'Démarrage d\'activité',
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                ],
                'constraints' => [
                    new NotBlank(message: 'Le démarrage d\'activité est requis'),
                ],
            ])
            ->add('activiteAssuree', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Activité assurée actuellement',
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                ],
            ])
            ->add('assuranceResilie', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Assurance résilié',
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non',
                ],
            ])
            ->add('motifResiliation', ChoiceType::class, [
                'required' => false,
                'placeholder' => 'Motif résiliation',
                'choices' => [
                    'Échéance' => 'echeance',
                    'Sinister' => 'sinister',
                    'Non paiement' => 'non_paiement',
                    'Amiable' => 'amiable',
                ],
            ])
            ->add('codePostal', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'Le code postal est requis'),
                ],
            ])
            ->add('email', EmailType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'L\'email est requis'),
                    new Email(message: 'Email invalide'),
                ],
            ])
            ->add('tele', TelType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank(message: 'Le téléphone est requis'),
                ],
            ])
        ;
    }
}