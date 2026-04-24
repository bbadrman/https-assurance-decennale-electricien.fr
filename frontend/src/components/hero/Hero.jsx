import React, { useState, useEffect } from 'react';
import { submitQuote } from '../../services/api';

function Hero({ onSuccess }) {
  const handleSubmitSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
  };

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    tele: '',
    entreprise: '',
    statut: '',
    chiffreAffaires: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [revealStates, setRevealStates] = useState({});

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
      setSuccess(true);
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
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="reveal stagger-children">
            <div className="relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 scanlines-bg opacity-20"></div>
                {/* Rotating glow ring */}
                <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400 glow-ring"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-yellow-300 glow-ring" style={{ animationDirection: 'reverse' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/img.png" alt="Assurance Décennale Électricien" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              <div className="lg:hidden mt-6">
                <img src="/images/img.png" alt="Assurance Décennale Électricien" className="w-full h-48 object-cover rounded-2xl shadow-lg" />
              </div>
            </div>
           </div>

          <div className="reveal">
            <div className="bg-surface rounded-3xl shadow-2xl p-8 card-hover border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-calculator text-2xl text-dark"></i>
                </div>
                <h2 className="text-3xl font-bold text-gradient mb-4">Complétez ce formulaire pour obtenir un tarif</h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
              </div>

              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-2">Merci !</h2>
                  <p className="text-gray-600">Votre demande a été envoyée. Un expert vous contactera rapidement.</p>
                </div>
              ) : (
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
                        <i className="fas fa-building text-yellow-500"></i>
                      </span>
                       <input
                         type="text"
                         name="entreprise"
                         value={formData.entreprise}
                         onChange={handleChange}
                         placeholder="Entreprise / Nom"
                         className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                       />
                    </div>
                  </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                           placeholder="Votre Nom *"
                           className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                           required
                         />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group flex">
                        <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                          <i className="fas fa-briefcase text-yellow-500"></i>
                        </span>
                         <select
                           name="statut"
                           value={formData.statut}
                           onChange={handleChange}
                           className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                           required
                         >
                           <option value="">Statut *</option>
                           <option value="auto-entrepreneur">Auto-entrepreneur</option>
                           <option value="ei">Entreprise Individuelle</option>
                           <option value="eurl">EURL</option>
                           <option value="sarl">SARL</option>
                           <option value="sas">SAS</option>
                         </select>
                      </div>
                    </div>
                  </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          placeholder="Téléphone *"
                          className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                          required
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
                          placeholder="Email *"
                          className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group flex">
                      <span className="inline-flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-600">
                        <i className="fas fa-euro-sign text-yellow-500"></i>
                      </span>
                        <select
                          name="chiffreAffaires"
                          value={formData.chiffreAffaires}
                          onChange={handleChange}
                          className="flex-1 min-w-0 px-4 py-4 border border-gray-200 rounded-r-xl bg-light focus:bg-surface transition-all duration-300 form-input"
                        >
                          <option value="">Chiffre d'affaires</option>
                          <option value="0-30k">Moins de 30 000€</option>
                          <option value="30-60k">30 000€ - 60 000€</option>
                          <option value="60-100k">60 000€ - 100 000€</option>
                          <option value="100k+">Plus de 100 000€</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
                      <input type="checkbox" defaultChecked className="mt-1 w-5 h-5 text-yellow-500 rounded focus:ring-2 focus:ring-yellow-500 border-2 border-yellow-300" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        En cliquant sur "Obtenir mon devis", vous acceptez d'être contacté par nos experts en assurance professionnelle.
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
                          <i className="fas fa-calculator mr-2"></i>Obtenir mon devis
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
       </div>
    </section>
  );
}

export default Hero;