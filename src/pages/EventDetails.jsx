import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import Countdown from '../components/Countdown';
import RegistrationForm from '../components/RegistrationForm';
import ConfirmationModal from '../components/ConfirmationModal';

export default function EventDetails() {
  const { id } = useParams();
  const [imageError, setImageError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);

  // Find event by ID
  const event = events.find((item) => item.id === id);

  // If event not found, render friendly 404 page
  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sand dark:bg-dark-surface text-brand flex items-center justify-center">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-ink dark:text-sand mb-3">
          Event Not Found
        </h1>
        <p className="text-muted dark:text-sand/70 text-base mb-8 max-w-md mx-auto">
          We could not find the event you are looking for. It may have moved or ended.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-sm transition-all shadow-warm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to all events</span>
        </Link>
      </div>
    );
  }

  const handleRegisterSuccess = (data) => {
    setRegistrationData(data);
    setModalOpen(true);
  };

  // Format date nicely
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand dark:text-sand/80 dark:hover:text-brand-light transition-colors group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to events</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Event Details (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Event Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-sand dark:bg-dark-border shadow-warm">
            {imageError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand/40 to-brand-dark/30 text-brand-dark dark:text-brand-light p-6 text-center">
                <svg className="w-12 h-12 mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-semibold">{event.category}</span>
              </div>
            ) : (
              <img
                src={event.image}
                alt={event.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cream/90 dark:bg-dark-bg/90 text-brand-dark dark:text-brand-light backdrop-blur-md border border-brand/20 shadow-sm">
                {event.category}
              </span>
            </div>
          </div>

          {/* Title & Organizer */}
          <div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-extrabold text-ink dark:text-sand tracking-tight">
              {event.name}
            </h1>
            <p className="mt-2 text-sm text-muted dark:text-sand/70">
              Organized by <strong className="text-ink dark:text-sand font-semibold">{event.organizer}</strong>
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-sand/50 dark:bg-dark-surface/60 border border-brand/20 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted dark:text-sand/60 uppercase tracking-wide">
                  Date
                </div>
                <div className="font-medium text-ink dark:text-sand mt-0.5">
                  {formattedDate}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted dark:text-sand/60 uppercase tracking-wide">
                  Time
                </div>
                <div className="font-medium text-ink dark:text-sand mt-0.5">
                  {event.time}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="w-9 h-9 rounded-xl bg-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted dark:text-sand/60 uppercase tracking-wide">
                  Venue
                </div>
                <div className="font-medium text-ink dark:text-sand mt-0.5">
                  {event.venue}
                </div>
              </div>
            </div>
          </div>

          {/* Full Description (2-3 short sentences) */}
          <div className="space-y-3 pt-2">
            <h3 className="font-playfair text-xl font-bold text-ink dark:text-sand">
              About This Event
            </h3>
            <p className="text-base text-ink/80 dark:text-sand/80 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Live Countdown in Styled Boxes */}
          <div className="pt-4">
            <Countdown targetDate={event.date} variant="full" />
          </div>
        </div>

        {/* Right Column: Sticky Registration Form (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <RegistrationForm
            currentEvent={event}
            onRegisterSuccess={handleRegisterSuccess}
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        registrationData={registrationData}
      />
    </div>
  );
}

