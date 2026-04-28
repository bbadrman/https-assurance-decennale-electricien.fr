import React, { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import Content from '../components/content/Content';
import FAQ from '../components/faq/FAQ';
import CTA from '../components/cta/CTA';

function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const isInViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0 && r.left < window.innerWidth && r.right > 0;
    };

    const observeReveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!el.dataset.revealObserved) {
          el.dataset.revealObserved = 'true';
          io.observe(el);
          if (isInViewport(el)) {
            el.classList.add('reveal-visible');
          }
        }
      });
    };

    // Initial observation after a short delay to ensure DOM is ready
    setTimeout(observeReveal, 100);
    
    const mo = new MutationObserver(observeReveal);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />

      <Content
        content={{
          title: "Assurance Décennale Électricien : Une Obligation Légale Incontournable",
          introduction: "Tout électricien intervenant sur des travaux de construction ou de rénovation est légalement tenu de souscrire une assurance décennale avant l'ouverture du premier chantier. Cette obligation, instituée par la loi Spinetta du 4 janvier 1978 et codifiée à l'article 1792 du Code civil, constitue le socle de la responsabilité des constructeurs. Faute de couverture, vous vous exposez à des poursuites judiciaires, à des sanctions financières sévères, et à l'incapacité de répondre aux appels d'offres des marchés publics ou privés. Nos experts analysent votre profil, comparent les contrats disponibles sur le marché, et vous recommandent la garantie la mieux adaptée à votre métier et à votre volume d'activité.",
          sections: [],
          ctaText: "",
          ctaLink: "#"
        }}
      />

      <Content
        content={{
          title: "Prix Assurance Décennale Électricien",
          introduction: "Le coût d'une assurance décennale pour électricien varie selon plusieurs critères objectifs que les assureurs évaluent systématiquement lors de l'établissement de la proposition.",
          sections: [
            {
              title: "Chiffre d'affaires : le principal facteur déterminant",
              content: "Le chiffre d'affaires annuel constitue le premier critère de tarification. Un électricien réalisant 40 000 € de chiffre d'affaires sur des chantiers résidentiels ne paiera pas la même prime qu'un artisan générant 200 000 € sur des bâtiments tertiaires. En pratique, les cotisations annuelles oscillent entre 600 et 1 200 € pour les profils à activité modeste, et peuvent dépasser 2 500 € pour les entreprises de taille plus importante ou spécialisées dans des installations complexes (courants forts, haute tension, systèmes de sécurité incendie)."
            },
            {
              title: "Autres critères influençant le tarif",
              content: "D'autres paramètres entrent en compte dans le calcul de la prime :<br><br><strong>• Nature des travaux réalisés :</strong> domotique, câblage résidentiel, installations industrielles<br><strong>• Ancienneté de l'entreprise et historique des sinistres :</strong> un dossier sinistre-free permet d'obtenir des conditions avantageuses<br><strong>• Statut juridique :</strong> auto-entrepreneur, EURL, SARL, SAS<br><strong>• Zone géographique d'intervention :</strong> certaines régions présentent des sinistralités différentes"
            },
            {
              title: "Pourquoi comparer en ligne ?",
              content: "La souscription en ligne permet d'obtenir des propositions tarifaires comparatives en quelques minutes. Les plateformes spécialisées dans l'assurance construction donnent accès direct aux offres de plusieurs assureurs, sans multiplier les rendez-vous. Nos experts examinent chaque contrat avec rigueur, en vérifiant particulièrement les exclusions de garantie et les plafonds de couverture — éléments souvent sous-estimés lors d'une souscription rapide.<br><br><strong>Conseil d'expert :</strong> ne comparez jamais deux contrats uniquement sur le prix. Une formule à 700 € avec un plafond de garantie à 300 000 € sera insuffisante dès que la valeur de l'ouvrage dépasse ce seuil. Le rapport couvertures/prime est le seul indicateur pertinent pour choisir."
            }
          ],
          ctaText: "Tarifez votre assurance décennale électricien en ligne",
          ctaLink: "#hero"
        }}
      />

      <Content
        content={{
          title: "Garanties Assurance Décennale Électricien",
          introduction: "L'assurance décennale couvre les dommages de nature décennale survenant après la réception des travaux, pendant une durée de dix ans. Ce périmètre est strictement défini par les articles 1792 et suivants du Code civil.",
          sections: [
            {
              title: "1. Dommages couverts par la garantie décennale",
              content: "Pour un électricien, les sinistres pris en charge concernent principalement :<br><br><strong>• Défauts d'installation électrique compromettant la solidité de l'ouvrage :</strong> un court-circuit provoquant un incendie structurel, par exemple<br><strong>• Malfaçons rendant le bâtiment impropre à sa destination :</strong> absence de mise à la terre entraînant des risques électriques permanents, tableau électrique non conforme aux normes NFC 15-100<br><strong>• Dommages indirects liés à une installation défectueuse :</strong> percement mal exécuté ayant fragilisé une cloison porteuse"
            },
            {
              title: "2. Garanties complémentaires à associer",
              content: "La décennale seule ne couvre pas l'intégralité des risques auxquels un électricien est exposé. Plusieurs garanties viennent compléter le socle obligatoire :<br><br><strong>• Responsabilité Civile Professionnelle (RCP) :</strong> couvre les dommages causés pendant le chantier, avant réception des travaux<br><strong>• Garantie de parfait achèvement :</strong> obligation légale pendant un an après réception<br><strong>• Garantie biennale :</strong> couvre les équipements dissociables de l'ouvrage pendant deux ans<br><br><em>Point d'attention :</em> certains contrats décennaux excluent les installations photovoltaïques ou les bornes de recharge pour véhicules électriques (IRVE). Si votre activité inclut ces prestations, vérifiez expressément qu'elles figurent dans les risques couverts."
            }
          ],
          ctaText: "Découvrez les garanties adaptées à votre activité",
          ctaLink: "#hero"
        }}
      />

      <Content
        content={{
          title: "Décennale Auto-Entrepreneur Électricien",
          introduction: "L'électricien auto-entrepreneur est soumis aux mêmes obligations légales de garantie décennale que tout artisan exerçant sous forme sociétaire. Le statut micro-entrepreneur n'exonère en aucun cas de l'obligation d'assurance construction prévue par la loi Spinetta.",
          sections: [
            {
              title: "1. Mentions obligatoires sur les devis et factures",
              content: "Depuis le 20 mars 2012, tout artisan du bâtiment, quel que soit son statut, doit impérativement faire figurer sur ses devis et factures :<br><br>• Le nom et les coordonnées de son assureur décennal<br>• Le numéro de contrat<br>• La couverture géographique du contrat<br><br>L'absence de ces mentions expose l'auto-entrepreneur à une amende pénale pouvant atteindre 75 000 € et à deux ans d'emprisonnement, conformément à l'article L243-3 du Code des assurances."
            },
            {
              title: "2. Particularités tarifaires pour les micro-entrepreneurs",
              content: "Les assureurs appliquent généralement une cotisation minimale forfaitaire aux auto-entrepreneurs, indépendamment du chiffre d'affaires réel. Cette cotisation plancher se situe habituellement entre 600 et 800 € annuels. Au-delà d'un certain seuil de chiffre d'affaires — variable selon les compagnies, souvent autour de 50 000 € — le tarif bascule sur un mode proportionnel.<br><br>Certains assureurs refusent de couvrir les auto-entrepreneurs en première année d'activité, ou appliquent des surprimes significatives. Nos experts connaissent les contrats qui acceptent les jeunes entreprises sans pénalisation tarifaire excessive et vous évitent les refus de couverture au moment de décrocher votre premier chantier."
            }
          ],
          ctaText: "Protégez votre activité en quelques clics",
          ctaLink: "#hero"
        }}
      />

      <Content
        content={{
          title: "Que Couvre la Garantie Décennale Électricien ?",
          introduction: "La garantie décennale couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à l'usage auquel il est destiné, lorsque ces dommages résultent d'un vice de construction. Pour un électricien, ce périmètre s'applique à des situations spécifiques.",
          sections: [
            {
              title: "1. Dommages directement liés aux travaux électriques",
              content: "Sont considérés comme dommages décennaux :<br><br>• Un court-circuit provoqué par une installation mal réalisée qui cause un incendie et détruit une partie de la structure du bâtiment<br>• Une installation électrique non conforme entraînant une mise hors service complète du bâtiment<br>• Un câblage défectueux ayant causé des surchauffes répétées dans les cloisons, avec risque d'incendie documenté"
            },
            {
              title: "2. Ce que la décennale ne couvre pas",
              content: "Certains dommages sortent du champ décennal et relèvent d'autres garanties :<br><br>• Dommages immatériels purs (perte d'exploitation du maître d'ouvrage) : à couvrir via la RCP<br>• Malfaçons esthétiques sans incidence sur la solidité ou la destination de l'ouvrage<br>• Dommages causés pendant le chantier, avant réception officielle des travaux<br>• Travaux d'entretien ou de maintenance (remplacement d'une ampoule, d'un disjoncteur isolé)"
            },
            {
              title: "3. La réception des travaux : point de départ de la garantie",
              content: "La garantie décennale ne s'active qu'à compter de la réception des travaux, acte juridique par lequel le maître d'ouvrage accepte l'ouvrage avec ou sans réserves. Un procès-verbal de réception signé constitue le point de départ du délai de dix ans. En l'absence de ce document, la date de réception peut être établie judiciairement, ce qui complexifie la gestion des sinistres."
            }
          ],
          ctaText: "Évaluez votre couverture décennale",
          ctaLink: "#hero"
        }}
      />

      <FAQ
        content={{
          items: [
            {
              question: "L'assurance décennale est-elle obligatoire pour un électricien ?",
              answer: "Oui. Tout constructeur au sens de l'article 1792-1 du Code civil, y compris un électricien intervenant sur un ouvrage de construction, est tenu de souscrire une assurance décennale avant l'ouverture du chantier. Cette obligation s'applique quelle que soit la forme juridique de l'entreprise : auto-entrepreneur, artisan, EURL ou SARL. Le défaut d'assurance constitue un délit pénal."
            },
            {
              question: "Quel est le prix moyen d'une assurance décennale pour un électricien ?",
              answer: "Le tarif annuel varie entre 600 et 2 500 euros selon le chiffre d'affaires, la nature des chantiers et l'historique de sinistres. Un électricien auto-entrepreneur avec un CA inférieur à 50 000 euros paiera généralement entre 600 et 900 euros par an. Une entreprise réalisant 150 000 euros de CA sur des chantiers mixtes (résidentiel et tertiaire) se situera davantage autour de 1 500 à 2 000 euros."
            },
            {
              question: "Un électricien auto-entrepreneur doit-il souscrire une décennale ?",
              answer: "Oui, sans exception. Le statut auto-entrepreneur ne dispense pas de l'obligation légale de garantie décennale. Les mentions de l'assureur, du numéro de contrat et de la couverture géographique doivent figurer sur chaque devis et chaque facture émis. L'absence de ces informations expose à des sanctions pénales."
            },
            {
              question: "Que se passe-t-il si un sinistre survient 8 ans après les travaux ?",
              answer: "La garantie décennale couvre les dommages survenus dans les dix ans suivant la réception des travaux. Un sinistre constaté 8 ans après la réception est donc pris en charge, à condition que l'assureur ait été déclaré sur le contrat en vigueur au moment de la réception. La déclaration de sinistre doit être effectuée rapidement après constatation du dommage."
            },
            {
              question: "Quelle différence entre décennale et responsabilité civile professionnelle pour un électricien ?",
              answer: "La décennale couvre les dommages survenant après réception des travaux, pendant dix ans, lorsqu'ils compromettent la solidité ou la destination de l'ouvrage. La RCP couvre les dommages causés pendant l'exécution des travaux (avant réception) : un outil tombant sur un meuble du client, une maladresse endommageant une canalisation existante. Les deux garanties sont complémentaires et généralement souscrites conjointement."
            }
          ]
        }}
      />

      <CTA
        content={{
          title: "Protégez votre activité dès aujourd'hui",
          subtitle: "Obtenez votre devis d'assurance décennale électricien gratuit, rapide et sans engagement en moins de 10 minutes",
          buttonText: "Obtenir mon devis",
          buttonLink: "#hero"
        }}
      />
    </>
  );
}

export default Home;
