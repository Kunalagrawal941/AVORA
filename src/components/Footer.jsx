import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-sand dark:bg-dark-surface border-t border-tan dark:border-dark-border text-ink dark:text-sand py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-brand text-cream flex items-center justify-center shadow-warm-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 6.9h7.3l-5.9 4.3 2.3 7-6.1-4.4-6.1 4.4 2.3-7-5.9-4.3h7.3z" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="font-playfair font-extrabold text-2xl text-ink dark:text-cream">
                  AVORA
                </span>
                <span className="font-playfair font-semibold text-2xl text-brand">
                  -Plan
                </span>
              </div>
            </Link>

            <p className="font-playfair italic text-brand-dark dark:text-brand-light font-medium text-base">
              Celebrate. Remember.
            </p>

            <p className="text-sm text-muted dark:text-sand/70 max-w-sm">
              We help you find great events, connect with good people, and make happy memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-base mb-4 text-ink dark:text-sand">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted dark:text-sand/80">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-brand dark:hover:text-brand-light transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('events')}
                  className="hover:text-brand dark:hover:text-brand-light transition-colors"
                >
                  Explore Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-brand dark:hover:text-brand-light transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-brand dark:hover:text-brand-light transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="font-playfair font-bold text-base mb-4 text-ink dark:text-sand">
              Follow Us
            </h4>
            <p className="text-xs text-muted dark:text-sand/70 mb-4">
              Stay in touch for news on upcoming shows and workshops.
            </p>
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a
                href="#social"
                aria-label="Follow AVORA-Plan on Twitter"
                className="w-9 h-9 rounded-full bg-cream dark:bg-dark-bg border border-brand/20 flex items-center justify-center text-ink dark:text-sand hover:text-brand hover:border-brand transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#social"
                aria-label="Follow AVORA-Plan on Instagram"
                className="w-9 h-9 rounded-full bg-cream dark:bg-dark-bg border border-brand/20 flex items-center justify-center text-ink dark:text-sand hover:text-brand hover:border-brand transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#social"
                aria-label="Follow AVORA-Plan on Facebook"
                className="w-9 h-9 rounded-full bg-cream dark:bg-dark-bg border border-brand/20 flex items-center justify-center text-ink dark:text-sand hover:text-brand hover:border-brand transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-tan/60 dark:border-dark-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted dark:text-sand/60 gap-4">
          <p>© 2026 AVORA-Plan. All rights reserved.</p>
          <p className="italic">Celebrate. Remember.</p>
        </div>
      </div>
    </footer>
  );
}

