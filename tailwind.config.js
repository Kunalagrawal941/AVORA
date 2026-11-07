/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FAF3EB",
        sand: "#F3E6D8",
        tan: "#E6D5C3",
        brand: {
          DEFAULT: "#B08968",
          light: "#C69C72",
          dark: "#7F5539",
        },
        ink: "#3B2A20",
        muted: "#8A735F",
        success: "#4F7942",
        danger: "#C0392B",
        dark: {
          bg: "#1E1611",
          surface: "#2A1F17",
          primary: "#C69C72",
          text: "#F3E6D8",
          border: "#3E2E22",
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(127, 85, 57, 0.08)',
        'warm': '0 10px 25px -5px rgba(127, 85, 57, 0.12), 0 8px 10px -6px rgba(127, 85, 57, 0.08)',
        'warm-lg': '0 20px 30px -10px rgba(127, 85, 57, 0.18)',
        'warm-xl': '0 25px 45px -12px rgba(127, 85, 57, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        scaleUp: 'scaleUp 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};

