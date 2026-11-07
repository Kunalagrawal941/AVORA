# AVORA
### Celebrate. Remember.

> **Live Demo:** https://avora-navy-three.vercel.app 
> **GitHub Repository:** https://github.com/Kunalagrawal941/AVORA.git

AVORA-Plan is a modern, stylish, and responsive event management website. It helps people find upcoming events, view all the details, and register in just a few clicks.

---

## What You Can Do

- **Find Events Quickly:** Search for events by name or place as you type.
- **Filter by Category:** Pick from Technology, Music, Workshop, Business, Sports, or Art & Culture.
- **Live Countdown Timers:** See the exact days, hours, minutes, and seconds until the event starts.
- **Easy Registration:** Sign up using a simple form with clear error messages and instant checks.
- **No Duplicate Signups:** The site checks your email so you cannot register twice for the same event.
- **Booking Confirmation:** Get an instant ticket with a unique ID (like `AVORA-123456`).
- **Dark and Light Mode:** Switch between dark and light themes. Your choice is saved automatically.
- **Works on All Devices:** Looks great on mobile phones, tablets, laptops, and desktop screens.

---

## Tech Stack

- **React 18** (JavaScript)
- **Vite** (Fast build tool)
- **Tailwind CSS v3.4** (Custom styling with a light brown theme)
- **React Router DOM v6** (HashRouter for smooth navigation without 404 errors)

---

## Folder Structure

```
avora-plan/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── events.js
    ├── context/
    │   └── ThemeContext.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── EventCard.jsx
    │   ├── EventGrid.jsx
    │   ├── SearchBar.jsx
    │   ├── CategoryFilter.jsx
    │   ├── Countdown.jsx
    │   ├── RegistrationForm.jsx
    │   ├── ConfirmationModal.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        └── EventDetails.jsx
```

---

## How to Install and Run

Make sure you have Node.js installed on your computer.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and visit the local link shown in your terminal (usually `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This builds an optimized production version in the `dist` folder.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## How It Meets All Requirements

1. **Brand & Name:** The name **AVORA-Plan** and tagline **Celebrate. Remember.** are used across the navbar, tab title, hero, footer, confirmation modal, and documentation.
2. **Simple Everyday English:** All text is short, clear, and easy for anyone to read. Sentences are under 15 words where possible, avoiding fancy or complex words.
3. **Warm Light Brown Theme:** Custom colors (`cream`, `sand`, `tan`, `brand`, `brand-dark`, `ink`) with smooth transitions and rounded corners.
4. **Dark Mode:** Easily toggle between light and dark modes with system preference support and no theme flash.
5. **Interactive Filtering:** Live search input combined with category chips, showing a friendly "No events found" message with a reset button.
6. **Form Validation:** Checks name, email, phone number, and event selection without ugly browser alert boxes. Shows red borders for errors and green borders when valid.
7. **Storage & Prevention:** Registrations are saved in `localStorage` (`avoraplan_registrations`) and duplicates are blocked.
8. **Reliable Navigation:** `HashRouter` ensures that refreshing pages on Vercel, Netlify, or GitHub Pages never triggers a 404 error.

---


© 2026 AVORA-Plan. Celebrate. Remember.
