import React, { useMemo, useState } from 'react';

function FAQ({ content = {} }) {
  const { items = [] } = content;

  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div
        className="bg-orb w-80 h-80 bg-green-200 top-10 left-10"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="bg-orb w-60 h-60 bg-purple-200 bottom-20 right-10"
        style={{ animationDelay: '-8s' }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl font-bold text-dark mb-4">FAQ</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {currentItems.map((item, index) => {
              const globalIndex =
                (currentPage - 1) * ITEMS_PER_PAGE + index;

              return (
                <div
                  key={globalIndex}
                  className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 reveal hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggle(globalIndex)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors"
                  >
                    <span className="font-semibold text-dark">
                      {item.question}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-yellow-500 transition-transform duration-300 ${
                        openIndex === globalIndex ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === globalIndex
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-yellow-50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              <button
                onClick={() => {
                  setCurrentPage((p) => Math.max(p - 1, 1));
                  setOpenIndex(null);
                }}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    setOpenIndex(null);
                  }}
                  className={`w-10 h-10 rounded-xl font-medium transition ${
                    currentPage === i + 1
                      ? 'bg-yellow-400 text-black shadow-md'
                      : 'bg-white border border-gray-300 hover:bg-yellow-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => {
                  setCurrentPage((p) => Math.min(p + 1, totalPages));
                  setOpenIndex(null);
                }}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQ;