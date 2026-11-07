import React from 'react';
import EventCard from './EventCard';

export default function EventGrid({ events, onResetFilters }) {
  if (events.length === 0) {
    return (
      <div className="py-16 px-4 text-center max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sand dark:bg-dark-surface flex items-center justify-center text-muted dark:text-sand/60">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand mb-2">
          No events found
        </h3>
        <p className="text-sm text-muted dark:text-sand/70 mb-6">
          Try another search or pick a different category.
        </p>
        <button
          onClick={onResetFilters}
          className="px-6 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-medium text-sm transition-colors shadow-warm-sm"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

