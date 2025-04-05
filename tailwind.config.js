/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",         // Para la carpeta 'app' (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}",       // Para la carpeta 'pages'
    "./components/**/*.{js,ts,jsx,tsx}",  // Para la carpeta 'components' (si la tienes)
    "./src/**/*.{js,ts,jsx,tsx}",         // Si utilizas una carpeta 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}