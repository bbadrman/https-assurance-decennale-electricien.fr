import React from 'react';

const HowItWorks = ({ content = {} }) => {
  const { title = 'Comment ça marche ?', steps = [] } = content;

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="bg-orb w-64 h-64 bg-yellow-200 top-10 right-10" style={{ animationDelay: '0s' }}></div>
      <div className="bg-orb w-48 h-48 bg-blue-200 bottom-10 left-10" style={{ animationDelay: '-6s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {title && (
            <div className="text-center mb-16 reveal">
              <h2 className="text-4xl font-bold text-dark mb-4">{title}</h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
          )}
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg icon-bounce hover-lift" style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-2xl font-bold text-dark">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;