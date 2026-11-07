import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <label htmlFor="event-search" className="sr-only">
        Search events
      </label>
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-4 pointer-events-none text-muted dark:text-sand/60">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          id="event-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by event name or place..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-cream dark:bg-dark-surface border border-brand/30 dark:border-dark-border text-ink dark:text-sand placeholder-muted dark:placeholder-sand/50 shadow-warm-sm focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-all duration-200 text-sm sm:text-base"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
            className="absolute right-3 p-1.5 rounded-full hover:bg-sand dark:hover:bg-dark-border text-muted dark:text-sand/60 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
          </button>
        )}
      </div>
    </div>
  );
}

