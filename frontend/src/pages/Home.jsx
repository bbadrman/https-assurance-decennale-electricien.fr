import React, { useEffect } from 'react';
import SectionRenderer from '../sections/SectionRenderer';
import homePageData from '../data/home-page.json';

function Home() {
  const sections = homePageData.sections || [];

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const isInViewport = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0 && r.left < window.innerWidth && r.right > 0;
    };

    const observeReveal = () => {
      document.querySelectorAll('.reveal:not([data-reveal-observed])').forEach((el) => {
        el.setAttribute('data-reveal-observed', 'true');
        io.observe(el);
        // Fallback: if element already in viewport, show immediately
        if (isInViewport(el)) {
          el.classList.add('reveal-visible');
        }
      });
    };

    observeReveal();
    const mo = new MutationObserver(observeReveal);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id || section.position} section={section} />
      ))}
    </>
  );
}

export default Home;