/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          60: { width: "100%" },
          100: { width: "0" },
        },
        brink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "black" },
        },
      },
      animation: {
        typewriter: "typewriter 5s steps(40) infinite",
        brink: "blink 0.5s step-end infinite",
      },
    },
  },
  plugins: [],
};
