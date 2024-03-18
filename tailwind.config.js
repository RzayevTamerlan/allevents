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
        "base": '16px',
        "medium": "18px",
        "lg": "22px",
        "larger": "24px",
        "xl": "28px",
        "2xl": '36px',
      },
      colors: {
        secondary: '#FF9E1B',
        'hero-subcontent': '#00AFD7',
        'hero-btn': '#FF6720'
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
