import React, { useState } from 'react';

function FAQ({ content = {} }) {
  const { items = [] } = content;

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">FAQ</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors"
                >
                  <span className="font-semibold text-dark">{item.question}</span>
                  <i className={`fas fa-chevron-down text-yellow-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-yellow-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
