import React, { useState, useEffect } from 'react';
import { submitQuote } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Hero({ onSuccess }) {
  const navigate = useNavigate();
  const handleSubmitSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
    // Redirect to response page on success
    navigate('/response');
  };

  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    raisonSociale: '',
    demarrageActivite: '',
    activiteAssuree: '',
    assuranceResilie: '',
    motifResiliation: '',
    codePostal: '',
    email: '',
    tele: ''
  });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [revealStates, setRevealStates] = useState({});

  // Conditional logic for field visibility
  const hideAll = formData.demarrageActivite === "oui";
  const showMotifResiliation =
    !hideAll &&
    formData.activiteAssuree !== "non" &&
    formData.assuranceResilie !== "non";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealStates((prev) => ({
              ...prev,
              [entry.target.dataset.revealId]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => {
      if (!el.dataset.revealId) {
        el.dataset.revealId = Math.random().toString(36).substr(2, 9);
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     setError(null);

     try {
       await submitQuote(formData);
       handleSubmitSuccess();
     } catch (err) {
       setError(err.message);
     } finally {
       setLoading(false);
     }
   };

  return (
    <section id="hero" className="py-20 lg:py-32 bg-gradient-to-br from-light via-surfaceHover to-light hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 scanlines-bg opacity-30"></div>
      
      {/* Animated background orbs */}
      <div className={`bg-orb w-96 h-96 bg-yellow-300 top-20 left-10 transition-all duration-1000 ${revealStates.orb1 ? 'opacity-30 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0s' }} data-reveal data-reveal-id="orb1"></div>
      <div className={`bg-orb w-80 h-80 bg-blue-300 bottom-20 right-10 transition-all duration-1000 delay-300 ${revealStates.orb2 ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '-5s' }} data-reveal data-reveal-id="orb2"></div>
      <div className={`bg-orb w-60 h-60 bg-green-300 top-1/2 left-1/3 transition-all duration-1000 delay-500 ${revealStates.orb3 ? 'opacity-20 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{ animationDelay: '-10s' }} data-reveal data-reveal-id="orb3"></div>
      
      {/* Floating decorative elements */}
      <div className={`absolute top-10 left-10 transition-all duration-1000 delay-200 ${revealStates.deco1 ? 'opacity-30' : 'opacity-0 -translate-x-10'}`}>
        <div className="w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center floating-animation">
          <i className="fas fa-shield-alt text-yellow-600 text-2xl"></i>
        </div>
      </div>
      <div className={`absolute top-20 right-20 transition-all duration-1000 delay-400 ${revealStates.deco2 ? 'opacity-25' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '-2s' }}>
        <div className="w-20 h-20 bg-blue-400 rounded-full shadow-lg flex items-center justify-center floating-animation">
          <i className="fas fa-bolt text-blue-500 text-2xl"></i>
        </div>
      </div>
      <div className={`absolute bottom-10 left-1/4 transition-all duration-1000 delay-600 ${revealStates.deco3 ? 'opacity-20' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '-4s' }}>
        <div className="w-12 h-12 bg-green-400 rounded-lg shadow-lg flex items-center justify-center floating-animation">
          <i className="fas fa-plug text-green-500 text-lg"></i>
        </div>
      </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
           <div className="reveal order-1 lg:order-2">
             <div className="bg-surface rounded-3xl shadow-2xl p-8 card-hover border border-gray-100">
               <div className="text-center mb-8">
                 <div className="w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                   <i className="fas fa-calculator text-2xl text-dark"></i>
                 </div>
                 <h2 className="text-3xl font-bold text-gradient mb-4">Complétez ce formulaire pour obtenir un tarif</h2>
                 <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
               </div>

                <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="form-group">
                        <div className="input-group flex">
                          <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                            <i className="fas fa-user text-yellow-500"></i>
                          </span>
                          <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom..."
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group flex">
                          <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                            <i className="fas fa-user-tag text-yellow-500"></i>
                          </span>
                          <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom..."
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group flex">
                          <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                            <i className="fas fa-building text-yellow-500"></i>
                          </span>
                          <input
                            type="text"
                            name="raisonSociale"
                            value={formData.raisonSociale}
                            onChange={handleChange}
                            placeholder="Raison sociale..."
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-calendar-check text-yellow-500"></i>
                            </span>
                            <select
                              name="demarrageActivite"
                              value={formData.demarrageActivite}
                              onChange={handleChange}
                              className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                              required
                            >
                              <option value="">Démarrage d'activité</option>
                              <option value="oui">Oui</option>
                              <option value="non">Non</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-shield-alt text-yellow-500"></i>
                            </span>
                          <select
                            name="activiteAssuree"
                            value={formData.activiteAssuree}
                            onChange={handleChange}
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required={!hideAll}
                          >
                            <option value="">Activité assurée actuellement</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                          </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-ban text-yellow-500"></i>
                            </span>
                          <select
                            name="assuranceResilie"
                            value={formData.assuranceResilie}
                            onChange={handleChange}
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required={!hideAll}
                          >
                            <option value="">Assurance résilié</option>
                            <option value="oui">Oui</option>
                            <option value="non">Non</option>
                          </select>
                          </div>
                        </div>

                        {showMotifResiliation && (<div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-exclamation-triangle text-yellow-500"></i>
                            </span>
                            <select
                              name="motifResiliation"
                              value={formData.motifResiliation}
                              onChange={handleChange}
                              className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                              required={showMotifResiliation}
                            >
                              <option value="">Motif résiliation</option>
                              <option value="echeance">Échéance</option>
                              <option value="sinister">Sinister</option>
                              <option value="non_paiement">Non paiement</option>
                              <option value="amiable">Amiable</option>
                            </select>
                          </div>
                        </div>)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-map-marker-alt text-yellow-500"></i>
                            </span>
                            <input
                              type="text"
                              name="codePostal"
                              value={formData.codePostal}
                              onChange={handleChange}
                              placeholder="Code Postal..."
                              className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                              required={!hideAll}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group flex">
                            <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                              <i className="fas fa-envelope text-yellow-500"></i>
                            </span>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email..."
                              className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                              required={!hideAll}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group flex">
                          <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                            <i className="fas fa-phone text-yellow-500"></i>
                          </span>
                          <input
                            type="tel"
                            name="tele"
                            value={formData.tele}
                            onChange={handleChange}
                            placeholder="Téléphone..."
                            className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                        <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-yellow-500 rounded focus:ring-2 focus:ring-yellow-500 border-2 border-yellow-300" />
                        <span className="text-sm text-gray-600 leading-relaxed">
                          En cliquant sur 'Comparer', vous acceptez de transmettre vos informations à AKSAM ASSURANCES, qui accepte de les utiliser conformément à sa politique de confidentialité dans le but de vous fournir des propositions de devis d'assurances adapté à votre recherche
                        </span>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-modern w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark font-bold py-4 px-8 rounded-xl pulse-animation"
                      >
                        {loading ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>Traitement en cours...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-calculator mr-2"></i>Comparer maintenant
                          </>
                        )}
                      </button>
                    </div>
                  </form>
            
             </div>
           </div>
<div className="reveal order-2 lg:order-1 lg:flex-1">
  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden h-full min-h-[600px] relative group">
    
    {/* scanlines */}
    <div className="absolute inset-0 scanlines-bg opacity-20"></div>

    {/* glow */}
    <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 rounded-full border-2 border-yellow-400 glow-ring"></div>
      <div
        className="absolute inset-4 rounded-full border-2 border-yellow-300 glow-ring"
        style={{ animationDirection: "reverse" }}
      ></div>
    </div>

    {/* image */}
    <img
      src="/images/img.png"
      alt="Assurance Décennale Électricien"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</div>
          </div>
        </div>
    </section>
  );
}

export default Hero;