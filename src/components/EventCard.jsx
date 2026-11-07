import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';

export default function EventCard({ event }) {
  const [imageError, setImageError] = useState(false);

  // Format date nicely
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <article className="group bg-cream dark:bg-dark-surface rounded-2xl overflow-hidden border border-sand dark:border-dark-border shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Event Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-sand dark:bg-dark-border">
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand/30 via-brand-dark/20 to-brand/40 text-brand-dark dark:text-brand-light p-4 text-center">
            <svg
              className="w-10 h-10 mb-2 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-semibold">{event.category}</span>
          </div>
        ) : (
          <img
            src={event.image}
            alt={event.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cream/90 dark:bg-dark-bg/90 text-brand-dark dark:text-brand-light backdrop-blur-sm border border-brand/20 shadow-sm">
            {event.category}
          </span>
        </div>

        {/* Featured tag if event is featured */}
        {event.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand text-white shadow-sm">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l2.4 6.9h7.3l-5.9 4.3 2.3 7-6.1-4.4-6.1 4.4 2.3-7-5.9-4.3h7.3z" />
              </svg>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Mini Countdown */}
          <div className="mb-3">
            <Countdown targetDate={event.date} variant="mini" />
          </div>

          {/* Event Title */}
          <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand line-clamp-1 group-hover:text-brand transition-colors">
            {event.name}
          </h3>

          {/* Date & Venue */}
          <div className="mt-3 space-y-1.5 text-xs text-muted dark:text-sand/70">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-brand shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDate(event.date)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-brand shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          {/* Short Description (1-2 sentences) */}
          <p className="mt-3 text-sm text-ink/75 dark:text-sand/80 line-clamp-2 leading-relaxed">
            {event.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-sand dark:border-dark-border">
          <Link
            to={`/event/${event.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sand dark:bg-dark-border text-ink dark:text-sand group-hover:bg-brand group-hover:text-white font-medium text-sm transition-all duration-300"
          >
            <span>View Details</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

