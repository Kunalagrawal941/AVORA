import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import EventGrid from '../components/EventGrid';
import { events, categories } from '../data/events';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Filter events based on search query and category
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        event.name.toLowerCase().includes(q) ||
        event.venue.toLowerCase().includes(q) ||
        event.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactName.trim() && contactMessage.trim()) {
      setContactSubmitted(true);
      setContactName('');
      setContactMessage('');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Events Explorer Section */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-ink dark:text-sand tracking-tight">
            Find Your Next Event
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted dark:text-sand/70">
            Browse upcoming gatherings, workshops, and music shows.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-5 mb-10">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Results Count indicator */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-muted dark:text-sand/60 mb-6 px-1">
          <span>
            Showing <strong className="text-ink dark:text-sand">{filteredEvents.length}</strong> events
          </span>
          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="text-brand hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Events Grid */}
        <EventGrid
          events={filteredEvents}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* 3. About Section */}
      <section id="about" className="bg-sand/40 dark:bg-dark-surface/50 border-y border-sand dark:border-dark-border py-16 sm:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="mt-2 font-playfair text-3xl sm:text-4xl font-bold text-ink dark:text-sand">
              About AVORA-Plan
            </h2>
            <p className="mt-3 text-base text-muted dark:text-sand/80 leading-relaxed">
              We help you discover great events in your city. Our team works hard to bring people together. You can find concerts, workshops, and sports in one place.
            </p>
          </div>

          {/* Three Feature Highlight Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-cream dark:bg-dark-surface p-6 rounded-2xl border border-brand/20 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand mb-2">
                Easy to Join
              </h3>
              <p className="text-sm text-muted dark:text-sand/70 leading-relaxed">
                Pick any event and register with a few taps. It takes less than one minute.
              </p>
            </div>

            <div className="bg-cream dark:bg-dark-surface p-6 rounded-2xl border border-brand/20 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand mb-2">
                Clear Details
              </h3>
              <p className="text-sm text-muted dark:text-sand/70 leading-relaxed">
                See exact time, place, and directions with zero confusion.
              </p>
            </div>

            <div className="bg-cream dark:bg-dark-surface p-6 rounded-2xl border border-brand/20 shadow-warm-sm">
              <div className="w-12 h-12 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand mb-2">
                Warm Memories
              </h3>
              <p className="text-sm text-muted dark:text-sand/70 leading-relaxed">
                Celebrate good times and remember them forever with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 scroll-mt-24">
        <div className="bg-cream dark:bg-dark-surface border border-sand dark:border-dark-border rounded-3xl p-8 sm:p-12 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Contact Info */}
            <div>
              <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                We Are Here To Help
              </span>
              <h2 className="mt-2 font-playfair text-3xl sm:text-4xl font-bold text-ink dark:text-sand">
                Get In Touch
              </h2>
              <p className="mt-3 text-base text-muted dark:text-sand/80">
                Have a question about AVORA-Plan or an event? Send us a quick note anytime.
              </p>

              <div className="mt-8 space-y-4 text-sm text-ink/80 dark:text-sand/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted dark:text-sand/60">Email</div>
                    <span className="font-medium">hello@avoraplan.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted dark:text-sand/60">Phone</div>
                    <span className="font-medium">+1 (555) 019-2834</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sand dark:bg-dark-bg text-brand flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted dark:text-sand/60">Office</div>
                    <span className="font-medium">124 Market Street, City Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-sand/40 dark:bg-dark-bg/60 p-6 sm:p-8 rounded-2xl border border-brand/20">
              {contactSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-success/20 text-success flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted dark:text-sand/70 mt-1">
                    Thank you. We will reply to your note soon.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-brand hover:underline"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand mb-2">
                    Send Us A Quick Note
                  </h3>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-ink dark:text-sand mb-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Please enter your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream dark:bg-dark-surface border border-brand/30 dark:border-dark-border text-ink dark:text-sand text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-msg" className="block text-xs font-semibold text-ink dark:text-sand mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="contact-msg"
                      rows="3"
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Write your note here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-cream dark:bg-dark-surface border border-brand/30 dark:border-dark-border text-ink dark:text-sand text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-sm transition-colors shadow-warm-sm"
                  >
                    Send Note
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

