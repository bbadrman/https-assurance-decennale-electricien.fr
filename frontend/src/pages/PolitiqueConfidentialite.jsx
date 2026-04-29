import React from 'react';
import { Link } from 'react-router-dom';

function PolitiqueConfidentialite() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-light via-surfaceHover to-light hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 scanlines-bg opacity-30"></div>

        {/* Animated background orbs */}
        <div className="bg-orb w-96 h-96 bg-yellow-300 top-20 left-10 transition-all duration-1000 opacity-30 translate-y-0" style={{ animationDelay: '0s' }}></div>
        <div className="bg-orb w-80 h-80 bg-blue-300 bottom-20 right-10 transition-all duration-1000 delay-300 opacity-25 translate-y-0" style={{ animationDelay: '-5s' }}></div>
        <div className="bg-orb w-60 h-60 bg-green-300 top-1/2 left-1/3 transition-all duration-1000 delay-500 opacity-20 translate-y-0" style={{ animationDelay: '-10s' }}></div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 transition-all duration-1000 delay-200 opacity-30">
          <div className="w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center floating-animation">
            <i className="fas fa-shield-alt text-yellow-600 text-2xl"></i>
          </div>
        </div>
        <div className="absolute top-20 right-20 transition-all duration-1000 delay-400 opacity-25" style={{ animationDelay: '-2s' }}>
          <div className="w-20 h-20 bg-blue-400 rounded-full shadow-lg flex items-center justify-center floating-animation">
            <i className="fas fa-user-secret text-blue-500 text-2xl"></i>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/4 transition-all duration-1000 delay-600 opacity-20" style={{ animationDelay: '-4s' }}>
          <div className="w-12 h-12 bg-green-400 rounded-lg shadow-lg flex items-center justify-center floating-animation">
            <i className="fas fa-key text-green-500 text-lg"></i>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <i className="fas fa-shield-alt text-2xl text-dark"></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Politique de confidentialité</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Ce document explique, de façon claire et transparente, comment nous utilisons et traitons vos données personnelles, pour que vous puissiez comprendre facilement notre démarche. De plus, nous vous indiquons comment nous contacter si vous avez des questions sur vos données personnelles, et nous serions d'ailleurs heureux de pouvoir vous éclairer. Veuillez également lire nos Informations sur les cookies qui détaillent comment Aksam Assurances utilise les cookies et d'autres technologies similaires.
                </p>
              </div>

               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Identité du responsable de traitement</h2>
                 <p className="text-gray-700 leading-relaxed text-justify">
                  Le responsable des traitements des données des utilisateurs collectées via le SITE est la Société AKSAM Assurances SARL, au capital de 10 000,00 euros, immatriculée au RCS de Paris sous le n°840 653 463, dont le siège social 10 Rue de Penthièvre 75008 Paris. France (Cf. mention légales).
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Quels types de données personnelles sont recueillis par AKSAM ASSURANCES ?</h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-3">Collecte & traitement des données</h3>
                <h4 className="text-lg font-semibold text-dark mb-3">Données personnelles que vous nous donnez</h4>
                <p className="text-gray-700 leading-relaxed text-justify mb-3">
                  Dans le cadre de l'exploitation de notre SITE, nous sommes susceptibles de collecter des données à caractère personnel vous concernant. Vos données sont traitées conformément aux finalités prévues lors de la collecte. En particulier, nous collectons les données que vous acceptez de nous communiquer :
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 ml-4">
                  <li>Lors de votre visite et de votre navigation sur notre SITE.</li>
                  <li>Via les différents formulaires de demandes de devis que vous remplissez sur notre SITE.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
                  Quel que soit le mode de collecte, nous nous engageons à vous informer des finalités du traitement, du caractère obligatoire ou facultatif des réponses à apporter, des conséquences éventuelles, à votre égard, d'un défaut de réponse, des destinataires des données, de l'existence et des modalités d'exercice de ses droits d'accès, de rectification et d'opposition au traitement de vos données. Lorsque cela est nécessaire au regard de la Loi Informatique et Libertés, nous nous engageons, selon les cas, à recueillir votre consentement et/ou à vous permettre de vous opposer à l'utilisation de vos données pour certaines finalités. Les données que nous sommes susceptibles de collecter pour la réalisation des finalités décrites dans l'article ci-après de la présente politique de confidentialité concernent :
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 ml-4">
                  <li>Toutes les données d'identification collectées via nos formulaires d'assurance (civilité, nom, prénom, coordonnées postales, téléphoniques et électroniques, marque de véhicule, profil conducteur,) aux fins de vous établir un devis en assurance voiture particulière, ou assurance véhicule professionnel, ou assurance décennale, ou assurance santé.</li>
                  <li>Via les différents formulaires de demandes de devis que vous remplissez sur notre SITE.</li>
                  <li>Des données relatives au suivi de la relation commerciale : numéro de client, numéro de contrat, factures, demandes d'information, historique des échanges avec nos services : clientèle et gestion.</li>
                  <li>Des données de connexion (adresses IP, logs de connexion)</li>
                  <li>Des données relatives aux moyens de paiement en cas de prise de garantie (RIB, numéro de carte bancaire, date de fin de validité de la carte bancaire). Les données relatives aux cartes bancaires sont supprimées une fois la transaction réalisée, c'est-à-dire dès le paiement effectif de la commande.</li>
                  <li>Des données relatives à la souscription d'un contrat en ligne et au contrat en découlant.</li>
                  <li>Vos permis de conduire et cartes grises pour les contrats d'assurance véhicule et deux-roues.</li>
                  <li>Des données relatives à vos antécédents de conducteur (Bonus/malus, existence de sinistres, de suspension ou annulation de permis de conduire, de condamnation en relation avec la conduite d'un véhicule, de résiliation d'une assurance pour conduite sous l'emprise d'un état alcoolique ou sous stupéfiant…).</li>
                  <li>Des données relatives à de sinistres ou à l'existence d'hypothèques sur les biens immobiliers à assurer.</li>
                  <li>Des données relatives au règlement des factures : modalités de règlement, remises consenties, reçus, impayés, …</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-dark mb-3">Données personnelles que nous recueillons automatiquement</h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Lorsque vous vous rendez sur notre site Internet, même si vous n'effectuez pas une demande de devis, il se peut que nous collectons automatiquement certaines informations telles que votre adresse IP, la date et l'heure de votre connexion à nos services, le matériel, logiciel ou navigateur Internet que vous utilisez, ainsi que les données sur le système d'exploitation de votre ordinateur comme les différentes versions de l'application et vos paramètres de langue. Il se peut également que nous recueillons des données sur les clics ainsi que sur les pages que vous avez visitées. Si vous utilisez un appareil mobile, il se peut que des données identifiant votre appareil, vos paramètres et caractéristiques, votre emplacement, les crashes de l'application et d'autres activités du système soient également recueillis.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-dark mb-3">Données personnelles que nous recevons d'autres sources</h4>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nous ne disposons pas seulement des informations que vous nous donnez. Il est possible que nous recevions également des informations sur vous de la part d'autres source tel que pages blanche ou pages jaunes. Nous intégrons des services d'appel sur nos sites web pour vous permettre de contacter les conseillers de la société. Dans ce cas-là, nous recevons des métadonnées concernant ces appels (la date et la durée de l'appel).
                </p>
              </div>

               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Pourquoi AKSAM ASSURANCES recueille et utilise vos données personnelles ?</h2>
                 <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-3">Finalités des traitements</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Vos différentes données sont collectées pour assurer :
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 ml-4">
                  <li>Le bon fonctionnement et l'amélioration permanente du SITE, de ses services et de ses fonctionnalités,</li>
                  <li>Le suivi de notre relation tel que la réalisation d'enquêtes de satisfaction, ou le regroupement de vos contrats,</li>
                  <li>La gestion de nos opérations de prospection,</li>
                  <li>L'élaboration et la délivrance de devis adaptés à votre situation et à vos besoins,</li>
                  <li>La passation, la gestion et l'exécution des contrats d'assurance,</li>
                  <li>La gestion d'éventuelles difficultés et contentieux liés à la passation, la gestion et l'exécution des contrats d'assurance,</li>
                  <li>La gestion de vos demandes de droit d'accès, de rectification et d'opposition,</li>
                  <li>La gestion des impayés et du contentieux,</li>
                  <li>L'élaboration de statistiques destinées à améliorer le fonctionnement du SITE et la qualité de nos services,</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
                  Nous serons également susceptibles d'utiliser ces données à des fins légales et/ou règlementaires. En tout état de cause, nous nous engageons à traiter l'ensemble des données collectées de manière conforme à la loi n°78-17 du 6 janvier 1978 modifiée et aux normes simplifiées et autorisations uniques édictées par la CNIL.
                </p>
              </div>

               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Comment AKSAM ASSURANCES traite vos données personnelles ?</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  AKSAM ASSURANCES récupère vos principales données pour les envoyer à la compagnie d'assurance la plus adapté à vos besoins de tarification. Les destinataires de vos données personnelles sont nos partenaires : en principe les compagnies d'assurance, toute autre personne intervenant au contrat ou dans la gestion d'un sinistre en France.
                </p>
              </div>

               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">OÙ stockons-nous vos données personnelles ?</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Vos données personnelles sont stockées dans nos bases de données stockées sur des serveurs situés au ETATS UNIS.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Vos données personnelles sont –elles conservés ?</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nous avons pour objectif de toujours conserver vos données personnelles de la manière la plus sûre et la plus sécurisée, et uniquement pendant la durée nécessaire à la réalisation de la finalité poursuivie par le traitement des données nécessaires pour la réalisation et le suivi de vos contrats. Ainsi, le tableau ci-après illustre un aperçu général sur la durée de vie (légale) des principaux documents :
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">DOCUMENTS</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">DELAI DE CONSERVATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2">Contrat : dispositions générales et dispositions particulières</td><td className="border border-gray-300 px-4 py-2">5 ans à compter de la date fin du contrat (contrat frais de santé et contrat garantissant uniquement l'arrêt de travail uniquement)<br/>30 ans à compter de la date fin du contrat (contrat comportant une garantie contre le risque décès)</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Bordereaux de cotisations</td><td className="border border-gray-300 px-4 py-2">10 ans à compter de l'envoi du bordereau.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Bulletins d'adhésion et d'affiliation</td><td className="border border-gray-300 px-4 py-2">Conservation du document pendant la durée de l'adhésion/l'affiliation et :<br/>- 5 ans après la fin de la relation contractuelle pour les contrats ne contenant pas des risques décès ;<br/>- 30 ans après la fin de la relation contractuelle pour les contrats contenant des risques décès.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Tout dossier sinistre (hors Frais de santé)</td><td className="border border-gray-300 px-4 py-2">Pendant la durée de l'affiliation au contrat et 30 ans après le dernier règlement.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier Frais de Santé</td><td className="border border-gray-300 px-4 py-2">Pendant la durée de l'affiliation au contrat et 5 ans après le dernier règlement.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier médicale sans suite</td><td className="border border-gray-300 px-4 py-2">6 mois à compter du classement sans suite de la demande.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier d'acceptation médicale</td><td className="border border-gray-300 px-4 py-2">Pendant la durée de vie du contrat et :<br/>- 5 ans après la fin de la relation contractuelle pour les contrats ne contenant pas des risques décès ;<br/>- 30 ans après la fin de la relation contractuelle pour les contrats contenant des risques décès.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Données comptables et les pièces justificatives</td><td className="border border-gray-300 px-4 py-2">10 ans après inscription comptable.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier Fraude non avéré</td><td className="border border-gray-300 px-4 py-2">6 mois en cas de fraude non pertinente.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier Fraude</td><td className="border border-gray-300 px-4 py-2">5 ans à compter de la clôture du dossier fraude, auquel s'ajoute le délai de l'éventuelle procédure judiciaire.</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Dossier LCB/FT</td><td className="border border-gray-300 px-4 py-2">5 ans à compter de la date de clôture du dossier/ cessation de la relation d'affaire ou à compter de l'exécution de l'opération.</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Quelles sont les procédures de sécurité mises en place par AKSAM ASSURANCES pour protéger vos données personnelles ?</h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-3">Sécurité</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Nous respectons la loi Informatique et libertés en matière de sécurité et de confidentialité de vos données, ainsi que selon les nouvelles obligations du règlement général de la protection des données à caractère professionnel (RGPD). A ce titre, nous prenons les précautions utiles, au regard de la nature de vos données et des risques présentés par notre traitement, pour préserver la sécurité des données et, notamment, empêcher qu'elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès (protection physique des locaux, procédé d'authentification de nos conseillers avec accès personnel et sécurisé via des identifiants et mots de passe confidentiels, journalisation des connexions, chiffrement de certaines données,…). En outre, toutes les données que vous nous communiquées via les formulaires en ligne sont cryptées grâce au certificat dont nous bénéficions. Vous pouvez également vous opposer, pour des motifs légitimes, à ce que des données à caractère personnel vous concernant fassent l'objet du traitement que nous mettons en œuvre. Ces droits peuvent être exercés, par simple demande par courrier électronique à l'adresse dédiée contact@aksam-assurances.fr ou par courrier papier à l'adresse : AKSAM Assurances – 10 Rue de Penthièvre 75008 PARIS, ou par téléphone au 01 82 83 48 00 en justifiant de votre identité et d'un motif légitime lorsque celui-ci est exigé par la loi.
                </p>
              </div>

               <div>
                 <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Comment sont utilisés les cookies ?</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Les cookies sont utilisés dans différents buts. Ils permettent de vous identifier en tant qu'utilisateur unique lorsque vous naviguez sur plusieurs pages d'un site Internet.
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-3 mt-4">Les cookies de tiers</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Google Analytics : Le site utilise le service Google Analytics, fournit par Google Inc («Google»), qui permet d'analyser le site. Les données générées par ces cookies concernent :
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 ml-4">
                  <li>Votre utilisation du site</li>
                  <li>Votre adresse IP afin de déterminer la ville de connexion. Cette donnée est immédiatement anonymisée après localisation.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
                  Ces données sont transmises et stockées par Google sur des serveurs situés aux États-Unis. Les entités de Google sont adhérentes au Safe Harbor et assurent un niveau de protection adéquat des données (Décision 2000/520/CE du 26-7-2000). L'utilisateur peut pour avoir plus d'informations se rendre à la page : www.google.com/analytics/learn/privacy.html.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Puis-je contrôler les informations personnelles que j'ai partagées avec Aksam ASSURANCES ?</h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-dark mb-3">Vos droits</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Il est rappelé que, conformément aux dispositions de la loi n°78-17 dite « Informatique et Libertés » du 6 janvier 1978 telle que modifiée par la loi du 6 août 2004, ainsi que le règlement n° 2016/679, dit règlement général sur la protection des données (RGPD), constitue le texte de référence européen en matière de protection des données à caractère personnel : vous disposez d'un droit d'accès, de rectification, de mise à jour, de verrouillage ou d'effacement des données à caractère personnel vous concernant, qui sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite. Vous pouvez également vous opposer, pour des motifs légitimes, à ce que des données à caractère personnel vous concernant fassent l'objet du traitement que nous mettons en œuvre. Ces droits peuvent être exercés, par simple demande par courrier électronique à l'adresse dédiée contact@aksam-assurances.fr ou par courrier papier à l'adresse : Aksam ASSURANCES – 10 rue de Penthièvre 75008 PARIS, France, en justifiant de votre identité et d'un motif légitime lorsque celui-ci est exigé par la loi. Il est rappelé que AKSAM ASSURANCES dispose d'un délai légal de 2 mois pour répondre à votre demande. Cependant, nous mettons tout en œuvre pour respecter un délai maximum de 15 jours ouvrés suite à la réception de votre demande. Conformément à la loi 2014-344 du 17 mars 2014 relative à la consommation, vous disposez également d'un droit d'opposition au démarchage téléphonique en vous inscrivant gratuitement sur la liste d'opposition Bloctel. Toutefois, il est rappelé que dans le cadre de l'utilisation de nos services, le fait de remplir une demande de devis sur notre site vaut consentement libre et non équivoque, et le dispositif Bloctel ne pourra s'appliquer. Le responsable du traitement est la société AKSAM ASSURANCES, immatriculée au RCS de PARIS sous le numéro 840 653 463. Pour rappel, le traitement mis en œuvre repose sur plusieurs fonctionnalités ayant pour finalités la mise à disposition d'offres personnalisées d'assurances, le comparatif de ces offres, l'analyse et le reporting de statistiques anonymes. AKSAM ASSURANCES dispose d'une plateforme téléphonique nommé AKSAM ASSURANCES et qui est situé en dehors de l'UE. La succursale se compose de plusieurs services et d'un personnel hautement qualifié. Elle se compose d'un service commercial, d'un service de gestion, d'un service qualité et d'une cellule informatique qui assure la protection de nos serveurs ainsi que de vos données. Nous vous informons que cette politique de protection des données personnelles peut être modifiée par notre délégué de protection des données. Dans ce cas, ces modifications seront consultables sur cette page.
                </p>
              </div>

          

               <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border border-yellow-200">
                 <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">Retour à l'accueil</h3>
                 <p className="text-gray-700 leading-relaxed mb-6">
                   Découvrez nos offres d'assurance professionnelle et obtenez votre devis personnalisé en quelques clics.
                 </p>
                 <Link to="/" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 gradient-shine">
                   <i className="fas fa-arrow-left mr-2"></i>
                   Retour à l'accueil
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PolitiqueConfidentialite;