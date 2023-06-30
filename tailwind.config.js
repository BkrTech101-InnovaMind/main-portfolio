/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "coding_font",
      },
      animation: {
        "slide-down": "slide-down 0.5s ease-out",
        cursor: "blink 1s linear infinite",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        blink: {
          "0%": { opacity: "100%" },
          "50%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
}
