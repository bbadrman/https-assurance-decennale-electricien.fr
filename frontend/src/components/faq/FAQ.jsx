import React, { useState } from 'react';

function FAQ({ content = {} }) {
  const { items = [] } = content;

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div className="bg-orb w-80 h-80 bg-green-200 top-10 left-10" style={{ animationDelay: '0s' }}></div>
      <div className="bg-orb w-60 h-60 bg-purple-200 bottom-20 right-10" style={{ animationDelay: '-8s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold text-dark mb-4">FAQ</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 reveal hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors"
                >
                  <span className="font-semibold text-dark">{item.question}</span>
                  <i className={`fas fa-chevron-down text-yellow-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 py-4 bg-yellow-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;