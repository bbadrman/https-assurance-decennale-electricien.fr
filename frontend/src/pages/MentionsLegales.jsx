import React from 'react';
import { Link } from 'react-router-dom';

function MentionsLegales() {
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
            <i className="fas fa-gavel text-yellow-600 text-2xl"></i>
          </div>
        </div>
        <div className="absolute top-20 right-20 transition-all duration-1000 delay-400 opacity-25" style={{ animationDelay: '-2s' }}>
          <div className="w-20 h-20 bg-blue-400 rounded-full shadow-lg flex items-center justify-center floating-animation">
            <i className="fas fa-balance-scale text-blue-500 text-2xl"></i>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/4 transition-all duration-1000 delay-600 opacity-20" style={{ animationDelay: '-4s' }}>
          <div className="w-12 h-12 bg-green-400 rounded-lg shadow-lg flex items-center justify-center floating-animation">
            <i className="fas fa-file-contract text-green-500 text-lg"></i>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <i className="fas fa-file-contract text-2xl text-dark"></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Mentions légales</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Conditions juridiques</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  En envoyant un courrier électronique à la société ou en accédant et/ou utilisant le Site Internet www.aksam-assurances.fr, chaque personne physique (ci-après « l'Utilisateur ») déclare et garantit qu'elle a pris préalablement connaissances des présentes conditions juridiques, c'est-à-dire des informations légales, des règles applicables à la protection des données à caractère personnelles et des conditions d'utilisation et qu'elle en accepte les termes et conditions sans réserve, modification ou restriction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Éditeur</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le site www.assurance-pour-vtc.fr est édité par la société <strong>AKSAM ASSURANCES SARL AU</strong> au capital de 10.000 €
                </p>
                <div className="mt-4 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li><strong>Siège social :</strong> 10 Rue de Penthièvre 75008 Paris</li>
                    <li><strong>SIRET :</strong> 84065346300033</li>
                    <li><strong>R.C.S Paris :</strong> 840 653 463</li>
                    <li><strong>ORIAS :</strong> 180 074 24</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Hébergeur</h2>
                <p className="text-gray-700 leading-relaxed">
                  Le présent Site est hébergé par la société <strong>NAMECHEAP</strong>.
                </p>
                <div className="mt-4 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                  <p className="text-sm text-gray-700">
                    <strong>Adresse :</strong> EU Data Center, Amsterdam, Netherlands.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Liens hypertextes</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Leur contenu et/ou les documents accessibles à partir des liens hypertextes publiés sur le Site Web ne sauraient engager la responsabilité de la société.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Utilisation des cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous utilisons différents types de cookies pour améliorer votre expérience sur notre site.
                </p>
                <div className="space-y-4">
                   <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl border-l-4 border-yellow-400">
                     <h3 className="text-lg sm:text-xl font-semibold text-dark mb-2">1. Cookies fonctionnels</h3>
                     <p className="text-gray-700 text-sm leading-relaxed">
                      Permettent au site de se souvenir des choix que vous faites et d'améliorer votre navigation. Durée de vie courte, maximum 13 mois.
                    </p>
                  </div>
                   <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl border-l-4 border-yellow-400">
                     <h3 className="text-lg sm:text-xl font-semibold text-dark mb-2">1. Cookies fonctionnels</h3>
                     <p className="text-gray-700 text-sm leading-relaxed">
                      Collectent des informations pour étudier la navigation : nombre de visites, pages visitées, provenance des visiteurs, etc.
                    </p>
                  </div>
                   <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl border-l-4 border-yellow-400">
                    <h3 className="text-lg sm:text-xl font-semibold text-dark mb-2">3. Cookies sociaux</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                       Permettent le partage de contenus sur les réseaux sociaux comme LinkedIn, Viadeo et autres.
                     </p>
                   </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-dark mb-3">Configuration des cookies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Firefox</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Internet Explorer</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Google Chrome</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Safari</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Opéra</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Protection des données personnelles</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les informations personnelles recueillies feront l'objet d'un traitement automatisé conformément à la loi française n° 78-17 du 6 janvier 1978.
                </p>
                <div className="mt-4 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                  <p className="text-sm text-gray-700">
                    <strong>Contact :</strong> AKSAM ASSURANCES<br />
                    10 Rue de Penthièvre 75008 Paris<br />
                    Email: contact@aksam-assurances.fr
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Vos droits</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Confirmation du traitement de vos données</li>
                  <li>Accès à vos données personnelles</li>
                  <li>Modification et suppression</li>
                  <li>Opposition au traitement</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Droit d'auteur et propriété intellectuelle</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Le site et son contenu font l'objet d'une protection légale au titre de la propriété littéraire et artistique. Il est interdit de copier ou reproduire tout ou partie du contenu du site.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <strong>Important :</strong> Le non-respect de ces règles peut engager votre responsabilité civile et pénale.
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">Réclamations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour toute réclamation, contactez-nous :
                </p>
                <div className="mt-4 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li><strong>Téléphone :</strong> 01 82 83 48 00</li>
                    <li><strong>Email :</strong> contact@aksam-assurances.fr</li>
                    <li><strong>Adresse :</strong> 10 rue de Penthièvre 75008 Paris</li>
                  </ul>
                </div>
                 <div className="mt-4 p-4 sm:p-6 bg-blue-50 rounded-2xl border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Médiateur :</strong> La Médiation de la consommation PLANÈTE COURTIER<br />
                    Email : mediation@planetecourtier.com
                  </p>
                </div>
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

export default MentionsLegales;