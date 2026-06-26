import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Response from './pages/Response';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assurance-decennale-electricien" element={<Home />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/response" element={<Response />} />
            <Route path="*" element={
              <div className="min-h-screen bg-gradient-to-br from-light via-surfaceHover to-light hero-pattern relative overflow-hidden py-20 flex items-center justify-center">
                <div className="absolute inset-0 scanlines-bg opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                  <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <i className="fas fa-exclamation-triangle text-2xl text-dark"></i>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">Page non trouvée</h1>
                    <p className="text-gray-600 mb-8">La page que vous cherchez n'existe pas.</p>
                    <Link to="/" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 gradient-shine">
                      <i className="fas fa-home mr-2"></i> Retour à l'accueil
                    </Link>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}