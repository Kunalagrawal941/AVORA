import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {/* Decorative Warm Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand/50 via-cream to-cream dark:from-dark-surface/50 dark:via-dark-bg dark:to-dark-bg -z-10" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10 bg-[radial-gradient(#7F5539_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand dark:bg-dark-surface border border-brand/30 shadow-warm-sm mb-6 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-brand-dark dark:text-brand-light uppercase">
            Celebrate. Remember.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-sand tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight animate-slideUp">
          Plan Events You Will Never Forget
        </h1>

        {/* Short Simple Subtitle (under 15 words) */}
        <p className="mt-5 text-base sm:text-lg text-muted dark:text-sand/80 max-w-2xl mx-auto font-normal">
          Find fun local events and join with your friends today.
        </p>

        {/* Call to action buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('events')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-brand hover:bg-brand-dark text-white font-semibold text-base shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Events
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-cream dark:bg-dark-surface text-ink dark:text-sand border border-brand/30 hover:border-brand font-semibold text-base hover:bg-sand/60 dark:hover:bg-dark-border transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Stat Chips */}
        <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          <div className="bg-sand/60 dark:bg-dark-surface/80 border border-brand/20 rounded-2xl p-4 sm:p-5 shadow-warm-sm backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
              50+
            </div>
            <div className="text-xs sm:text-sm text-muted dark:text-sand/70 font-medium mt-1">
              Events
            </div>
          </div>

          <div className="bg-sand/60 dark:bg-dark-surface/80 border border-brand/20 rounded-2xl p-4 sm:p-5 shadow-warm-sm backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
              10K+
            </div>
            <div className="text-xs sm:text-sm text-muted dark:text-sand/70 font-medium mt-1">
              Visitors
            </div>
          </div>

          <div className="bg-sand/60 dark:bg-dark-surface/80 border border-brand/20 rounded-2xl p-4 sm:p-5 shadow-warm-sm backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
              6
            </div>
            <div className="text-xs sm:text-sm text-muted dark:text-sand/70 font-medium mt-1">
              Categories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

