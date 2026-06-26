import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark py-4 sticky top-0 z-50 shadow-2xl border-b-2 border-yellow-600">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">

          {/* Left Section - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 slide-in-left">
            <div className="w-12 h-12 bg-dark/20 rounded-xl flex items-center justify-center shadow-lg">
              <i className="fas fa-shield-alt text-2xl text-dark"></i>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-dark">
                Assurance Décennale Électricien
              </h1>
              <p className="text-xs text-dark/80">
                Devis en quelques clics
              </p>
            </div>
          </div>

          {/* Right Section - Always visible */}
          <div className="flex items-center space-x-3 w-full justify-center lg:w-auto lg:justify-end slide-in-right">
            <div className="p-3 lg:p-4 bg-white/40 rounded-xl lg:rounded-2xl shadow-lg">
              <i className="fas fa-phone text-xl lg:text-2xl text-dark"></i>
            </div>

            <div>
              <span className="text-xs sm:text-sm text-dark/80 block">
                Conseil personnalisé
              </span>
              <a
                href="tel:0182834800"
                className="text-lg sm:text-2xl font-bold text-dark hover:text-primary transition-colors duration-300"
              >
                01 82 83 48 00
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;