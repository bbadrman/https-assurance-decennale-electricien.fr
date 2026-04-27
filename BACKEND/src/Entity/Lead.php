<?php

namespace App\Entity;

use App\Repository\LeadRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LeadRepository::class)]
class Lead
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(name: "firstname", length: 255, nullable: true)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $raisonSociale = null;

    #[ORM\Column(name: "demarrage_activite", length: 255, nullable: true)]
    private ?string $demarrageActivite = null;

    #[ORM\Column(name: "insured_currently", length: 255, nullable: true)]
    private ?string $activiteAssuree = null;

    #[ORM\Column(name: "previous_resiliation", length: 255, nullable: true)]
    private ?string $assuranceResilie = null;

    #[ORM\Column(name: "resiliation_reason", type: "text", nullable: true)]
    private ?string $motifResiliation = null;

    #[ORM\Column(name: "postcode", length: 255, nullable: true)]
    private ?string $codePostal = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $email = null;

    #[ORM\Column(name: "phone", length: 255, nullable: true)]
    private ?string $tele = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTime $createdAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): static
    {
        $this->nom = $nom;
        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): static
    {
        $this->prenom = $prenom;
        return $this;
    }

    public function getRaisonSociale(): ?string
    {
        return $this->raisonSociale;
    }

    public function setRaisonSociale(?string $raisonSociale): static
    {
        $this->raisonSociale = $raisonSociale;
        return $this;
    }

    public function getDemarrageActivite(): ?string
    {
        return $this->demarrageActivite;
    }

    public function setDemarrageActivite(?string $demarrageActivite): static
    {
        $this->demarrageActivite = $demarrageActivite;
        return $this;
    }

    public function getActiviteAssuree(): ?string
    {
        return $this->activiteAssuree;
    }

    public function setActiviteAssuree(?string $activiteAssuree): static
    {
        $this->activiteAssuree = $activiteAssuree;
        return $this;
    }

    public function getAssuranceResilie(): ?string
    {
        return $this->assuranceResilie;
    }

    public function setAssuranceResilie(?string $assuranceResilie): static
    {
        $this->assuranceResilie = $assuranceResilie;
        return $this;
    }

    public function getMotifResiliation(): ?string
    {
        return $this->motifResiliation;
    }

    public function setMotifResiliation(?string $motifResiliation): static
    {
        $this->motifResiliation = $motifResiliation;
        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(?string $codePostal): static
    {
        $this->codePostal = $codePostal;
        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): static
    {
        $this->email = $email;
        return $this;
    }

    public function getTele(): ?string
    {
        return $this->tele;
    }

    public function setTele(?string $tele): static
    {
        $this->tele = $tele;
        return $this;
    }

    public function getCreatedAt(): ?\DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTime $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }
}
