import React, { useState, useEffect } from 'react';

export default function Countdown({ targetDate, variant = 'full' }) {
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();
    if (diff <= 0) {
      return null;
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    if (variant === 'mini') {
      return (
        <span className="text-xs font-medium text-brand-dark dark:text-brand-light">
          Event has started
        </span>
      );
    }
    return (
      <div className="bg-sand/60 dark:bg-dark-surface/80 border border-brand/20 rounded-2xl p-4 text-center">
        <p className="text-ink dark:text-dark-text font-medium text-base">
          This event has started
        </p>
      </div>
    );
  }

  // Mini variant for EventCard
  if (variant === 'mini') {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-dark dark:text-brand-light bg-cream/90 dark:bg-dark-surface/90 px-2.5 py-1 rounded-full border border-brand/20">
        <svg
          className="w-3.5 h-3.5 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
        </span>
      </div>
    );
  }

  // Full variant for EventDetails
  return (
    <div className="w-full">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted dark:text-tan/70 mb-2">
        Time Left To Join
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        <div className="bg-sand/70 dark:bg-dark-surface border border-brand/20 rounded-2xl p-3 sm:p-4 shadow-warm-sm">
          <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs font-medium text-muted dark:text-tan/70 mt-1">Days</div>
        </div>

        <div className="bg-sand/70 dark:bg-dark-surface border border-brand/20 rounded-2xl p-3 sm:p-4 shadow-warm-sm">
          <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs font-medium text-muted dark:text-tan/70 mt-1">Hours</div>
        </div>

        <div className="bg-sand/70 dark:bg-dark-surface border border-brand/20 rounded-2xl p-3 sm:p-4 shadow-warm-sm">
          <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs font-medium text-muted dark:text-tan/70 mt-1">Mins</div>
        </div>

        <div className="bg-sand/70 dark:bg-dark-surface border border-brand/20 rounded-2xl p-3 sm:p-4 shadow-warm-sm">
          <div className="text-2xl sm:text-3xl font-bold font-playfair text-brand-dark dark:text-brand-light">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs font-medium text-muted dark:text-tan/70 mt-1">Secs</div>
        </div>
      </div>
    </div>
  );
}

