/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "sm": '15px',
        "base-sm": '14px',
        "base": '16px',
        "medium": "18px",
        "lg": "22px",
        "larger": "24px",
        "xl": "28px",
        "2xl": '36px',
        "3xl": '48px',
        "4xl": '64px',
      },
      colors: {
        secondary: '#FF9E1B',
        'hero-subcontent': '#00AFD7',
        'hero-btn': '#FF6720',
        'nav-menu-item': '#141B4D',
        'contacts-item': '#F1F3F6',
        'contacts-label': '#47536E',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
