import React from 'react';

export default function ConfirmationModal({ isOpen, onClose, registrationData }) {
  if (!isOpen || !registrationData) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 dark:bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-cream dark:bg-dark-surface border border-sand dark:border-dark-border rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-warm-xl animate-scaleUp text-center relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand to-brand-dark" />

        {/* Success Tick Circle */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/15 text-success flex items-center justify-center">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Title */}
        <h3
          id="modal-title"
          className="font-playfair text-2xl sm:text-3xl font-bold text-ink dark:text-sand"
        >
          You are registered!
        </h3>

        {/* Brand Thank You message */}
        <p className="mt-2 text-sm sm:text-base text-muted dark:text-sand/80">
          Thank you for joining with AVORA-Plan.
        </p>

        {/* Registration Details Card */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-sand/60 dark:bg-dark-bg/60 border border-brand/20 text-left space-y-2.5 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-sand dark:border-dark-border">
            <span className="text-muted dark:text-sand/70">Registration ID</span>
            <span className="font-mono font-bold text-brand-dark dark:text-brand-light">
              {registrationData.registrationId}
            </span>
          </div>

          <div className="flex justify-between items-start pt-1">
            <span className="text-muted dark:text-sand/70">Participant</span>
            <span className="font-semibold text-ink dark:text-sand text-right">
              {registrationData.name}
            </span>
          </div>

          <div className="flex justify-between items-start pt-1">
            <span className="text-muted dark:text-sand/70">Event</span>
            <span className="font-semibold text-ink dark:text-sand text-right max-w-[200px] truncate">
              {registrationData.eventName}
            </span>
          </div>

          <div className="flex justify-between items-start pt-1">
            <span className="text-muted dark:text-sand/70">Date</span>
            <span className="font-medium text-ink/80 dark:text-sand/80 text-right">
              {registrationData.eventDate}
            </span>
          </div>
        </div>

        {/* Tagline footer note */}
        <div className="mt-5 text-xs font-semibold text-brand tracking-wider uppercase">
          Celebrate. Remember.
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-sm sm:text-base shadow-warm hover:shadow-warm-lg transition-all duration-300"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

