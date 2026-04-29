import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Globally handles scroll restoration on route changes.
 * Forces scroll to top on every navigation/page change.
 * Works with both browser history navigation and form redirects.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element after a short delay
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to allow page content to settle (helps with animations/layout)
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [hash, pathname]);

  return null;
}

export default ScrollToTop;
