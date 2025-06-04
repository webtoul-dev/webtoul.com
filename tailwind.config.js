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
      },
    },
  },
  plugins: [],
};
