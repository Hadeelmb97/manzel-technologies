/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin (function({ addUtilities}) {
  addUtilities({
    ".my-route-y-180":{
     transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d" ,
    },
    ".perspective": {
      perspective:  "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden"
    }
   
    
  })
})
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        backgroundImage: "#070713",
        primary: "#0a0a1a",
        secondary: "#a1a1aa",
        tertiary: "#0d0d1f",
        accent: {
          cyan: "#00f0ff",
          orange: "#ff6b35",
          purple: "#8b5cf6",
          gold: "#f59e0b",
        },
        dark: {
          100: "#1a1a2e",
          200: "#16162a",
          300: "#0f0f1a",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #070713",
        glow: "0 0 20px rgba(0, 240, 255, 0.3)",
        "glow-orange": "0 0 20px rgba(255, 107, 53, 0.3)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
      screens: {
        xs: "450px",
        850: "850px",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.png')",
        "hero-footer": "url('/src/assets/spline.png')",
        "hero": "url('/src/assets/why.png')",
        "works-pattern": "url('/src/assets/intro.gif')",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 240, 255, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [Myclass],
};
