/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-dark": "#0f172a", // bg-slate-900
        "zinc-muted": "#3f3f46", // bg-zinc-700
        "blue-highlight": "#60a5fa", // bg-blue-400
        "section-white": "#ffffff", // bg-white
        "text-elegant": "#e5e7eb", // text-gray-200
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
