import React, { useState, useEffect } from 'react';
import { events } from '../data/events';

export default function RegistrationForm({ currentEvent, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: currentEvent ? currentEvent.id : (events[0]?.id || ''),
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [duplicateError, setDuplicateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync selected event if currentEvent prop changes
  useEffect(() => {
    if (currentEvent) {
      setFormData((prev) => ({
        ...prev,
        eventId: currentEvent.id,
      }));
    }
  }, [currentEvent]);

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Please enter your name';
        }
        if (value.trim().length < 3) {
          return 'Name must have at least 3 letters';
        }
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          return 'Name must contain only letters and spaces';
        }
        return '';

      case 'email':
        if (!value.trim()) {
          return 'Please enter your email';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email';
        }
        return '';

      case 'phone':
        if (!value.trim()) {
          return 'Please enter your phone number';
        }
        // Allows exactly 10 digits or +91 followed by 10 digits
        const cleanPhone = value.replace(/[\s-]/g, '');
        if (!/^(\+91)?[0-9]{10}$/.test(cleanPhone)) {
          return 'Phone number must be 10 digits';
        }
        return '';

      case 'eventId':
        if (!value) {
          return 'Please pick an event';
        }
        return '';

      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setDuplicateError('');

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      eventId: true,
    });

    const isValid = validateAll();
    if (!isValid) return;

    setIsSubmitting(true);
    setDuplicateError('');

    // Check duplicate in localStorage
    try {
      const existing = JSON.parse(
        localStorage.getItem('avoraplan_registrations') || '[]'
      );

      const isDuplicate = existing.some(
        (reg) =>
          reg.email.toLowerCase() === formData.email.trim().toLowerCase() &&
          reg.eventId === formData.eventId
      );

      if (isDuplicate) {
        setDuplicateError('You have already registered for this event.');
        setIsSubmitting(false);
        return;
      }

      // Generate random registration ID: AVORA-XXXXXX
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      const registrationId = `AVORA-${randomNum}`;

      const selectedEventObj = events.find((ev) => ev.id === formData.eventId);

      const newRegistration = {
        id: Date.now().toString(),
        registrationId,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        eventId: formData.eventId,
        eventName: selectedEventObj ? selectedEventObj.name : 'AVORA Event',
        eventDate: selectedEventObj
          ? new Date(selectedEventObj.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : '',
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      existing.push(newRegistration);
      localStorage.setItem(
        'avoraplan_registrations',
        JSON.stringify(existing)
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventId: currentEvent ? currentEvent.id : (events[0]?.id || ''),
      });
      setTouched({});
      setErrors({});

      // Trigger modal callback
      onRegisterSuccess(newRegistration);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputBorderClass = (fieldName) => {
    if (!touched[fieldName]) {
      return 'border-brand/30 dark:border-dark-border focus:border-brand focus:ring-brand/30';
    }
    if (errors[fieldName]) {
      return 'border-danger focus:border-danger focus:ring-danger/30';
    }
    return 'border-success focus:border-success focus:ring-success/30';
  };

  return (
    <div className="bg-cream dark:bg-dark-surface rounded-3xl p-6 sm:p-8 border border-sand dark:border-dark-border shadow-warm">
      <div className="mb-6">
        <h3 className="font-playfair text-2xl font-bold text-ink dark:text-sand">
          Join This Event
        </h3>
        <p className="text-sm text-muted dark:text-sand/70 mt-1">
          Fill in your details to save your spot.
        </p>
      </div>

      {duplicateError && (
        <div className="mb-5 p-3.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm flex items-center gap-2">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{duplicateError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-ink dark:text-sand mb-1.5 uppercase tracking-wide"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Please enter your name"
            className={`w-full px-4 py-3 rounded-xl bg-sand/40 dark:bg-dark-bg/60 border text-ink dark:text-sand placeholder-muted text-sm focus:outline-none focus:ring-2 transition-all ${getInputBorderClass(
              'name'
            )}`}
          />
          {touched.name && errors.name && (
            <p className="mt-1 text-xs text-danger font-medium">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-ink dark:text-sand mb-1.5 uppercase tracking-wide"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="name@example.com"
            className={`w-full px-4 py-3 rounded-xl bg-sand/40 dark:bg-dark-bg/60 border text-ink dark:text-sand placeholder-muted text-sm focus:outline-none focus:ring-2 transition-all ${getInputBorderClass(
              'email'
            )}`}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-xs text-danger font-medium">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-ink dark:text-sand mb-1.5 uppercase tracking-wide"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="10 digit number"
            className={`w-full px-4 py-3 rounded-xl bg-sand/40 dark:bg-dark-bg/60 border text-ink dark:text-sand placeholder-muted text-sm focus:outline-none focus:ring-2 transition-all ${getInputBorderClass(
              'phone'
            )}`}
          />
          {touched.phone && errors.phone && (
            <p className="mt-1 text-xs text-danger font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Selected Event Dropdown */}
        <div>
          <label
            htmlFor="eventId"
            className="block text-xs font-semibold text-ink dark:text-sand mb-1.5 uppercase tracking-wide"
          >
            Selected Event
          </label>
          <div className="relative">
            <select
              id="eventId"
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-xl bg-sand/40 dark:bg-dark-bg/60 border text-ink dark:text-sand text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${getInputBorderClass(
                'eventId'
              )}`}
            >
              {events.map((ev) => (
                <option key={ev.id} value={ev.id} className="dark:bg-dark-surface">
                  {ev.name} ({ev.category})
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted dark:text-sand/60">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {touched.eventId && errors.eventId && (
            <p className="mt-1 text-xs text-danger font-medium">{errors.eventId}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-brand hover:bg-brand-dark disabled:opacity-50 text-white font-semibold text-sm sm:text-base shadow-warm hover:shadow-warm-lg transition-all duration-300"
          >
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </button>
        </div>
      </form>
    </div>
  );
}

