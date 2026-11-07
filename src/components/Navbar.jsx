import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-warm border-b border-sand dark:border-dark-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand rounded-xl p-1"
            aria-label="AVORA-Plan Home"
          >
            {/* Inline SVG Star/Calendar Icon */}
            <div className="w-9 h-9 rounded-xl bg-brand text-cream flex items-center justify-center shadow-warm-sm group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2l2.4 6.9h7.3l-5.9 4.3 2.3 7-6.1-4.4-6.1 4.4 2.3-7-5.9-4.3h7.3z" />
              </svg>
            </div>
            <div className="flex items-baseline">
              <span className="font-playfair font-extrabold text-2xl tracking-tight text-ink dark:text-cream">
                AVORA
              </span>
              <span className="font-playfair font-semibold text-2xl text-brand">
                -Plan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm font-medium text-ink/80 dark:text-dark-text/80 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className="text-sm font-medium text-ink/80 dark:text-dark-text/80 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-sm font-medium text-ink/80 dark:text-dark-text/80 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm font-medium text-ink/80 dark:text-dark-text/80 hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-full bg-sand dark:bg-dark-surface text-ink dark:text-sand hover:bg-tan dark:hover:bg-dark-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {theme === 'dark' ? (
                // Sun Icon
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2.5 rounded-xl bg-sand dark:bg-dark-surface text-ink dark:text-sand hover:bg-tan dark:hover:bg-dark-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Down Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream dark:bg-dark-surface border-b border-sand dark:border-dark-border animate-slideDown px-4 pt-3 pb-6 space-y-3 shadow-warm-lg">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2.5 px-4 text-base font-medium rounded-xl hover:bg-sand dark:hover:bg-dark-border text-ink dark:text-sand transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className="block w-full text-left py-2.5 px-4 text-base font-medium rounded-xl hover:bg-sand dark:hover:bg-dark-border text-ink dark:text-sand transition-colors"
          >
            Events
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2.5 px-4 text-base font-medium rounded-xl hover:bg-sand dark:hover:bg-dark-border text-ink dark:text-sand transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2.5 px-4 text-base font-medium rounded-xl hover:bg-sand dark:hover:bg-dark-border text-ink dark:text-sand transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}

