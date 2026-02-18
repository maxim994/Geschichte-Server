/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Bodoni MT", "Book Antiqua", "Palatino Linotype", "serif"],
        display: ["Avenir Next", "Gill Sans MT", "Trebuchet MS", "Noto Sans", "sans-serif"],
        body: ["Source Sans Pro", "Segoe UI", "Noto Sans", "sans-serif"]
      },
      colors: {
        west: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          500: "#2563eb",
          700: "#1e40af"
        },
        east: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          500: "#dc2626",
          700: "#991b1b"
        },
        timeline: {
          100: "#dbe3f0",
          500: "#64748b",
          700: "#334155"
        }
      },
      boxShadow: {
        panel: "0 18px 44px -24px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};
