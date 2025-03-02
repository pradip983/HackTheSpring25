/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors  : {
        Blue : '#004aad',
        Black : "#050505",
        Bone : "#DDDBCB",
        OldLace : "#F5F1E3",
        White : "#FFFFFF",
        themeyellow : "#F8C537",
        themepurple : "#7D5BA6"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}