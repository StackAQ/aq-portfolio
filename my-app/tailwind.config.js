/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        brink: {
          "0%, 100%": { "border-color": "transparent" },
          "50%": { "border-color": "black" },
        },
      },
      animation: {
        typewriter: "typewriter 4s steps(30, end) forwards",
        brink: "blink 0.5s step-end infinite",
      },
    },
  },
  plugins: [],
};
