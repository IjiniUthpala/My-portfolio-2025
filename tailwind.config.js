/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#f0eae6", // Light green for gradient
        "gradient-end": "#969696", // Blue for gradient
        "gradient-middle": "#EDEDED", // Light gray as middle color
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "gradient-pulse": "gradientBG 6s ease infinite", // Add gradient animation
        "typewriter": "typewriter 4s steps(40) 1s forwards, blink 0.75s step-end infinite", // Added typewriter animation
      },
      boxShadow: {
        'black-solid': '0px 4px 15px 0px rgba(0, 0, 0, 1)', // solid black shadow
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        gradientBG: {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
        },
        // Typewriter effect keyframes
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        // Blink cursor effect
        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
      },
    },
  },
  plugins: [],
};
