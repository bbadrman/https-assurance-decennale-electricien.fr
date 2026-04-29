import React from 'react';

function CTA({ content }) {
  const {
    title = 'Contactez-nous',
    description = 'Une question? N\'hésitez pas à nous contacter.',
    buttonText = 'Contactez-nous',
    buttonLink = '#hero'
  } = content || {};

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-4">{title}</h2>
        </div>
        <div className="reveal" style={{ animationDelay: '0.1s' }}>
          <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
         <a 
           href={buttonLink} 
           className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-dark font-bold py-4 px-10 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105 gradient-shine"
         >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;