// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // bleu principal
          dark: "#1e40af",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#f97316", // orange secondaire
          dark: "#c2410c",
          light: "#fdba74",
        },
        neutral: {
          DEFAULT: "#f9fafb", // gris clair
          dark: "#374151",    // gris foncé pour texte
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // police moderne
      },
    },
  },
  plugins: [],
}
