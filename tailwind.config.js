/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans]
      },
      colors: {
        dark: "#021212",
        light: "#F5FBEF",
        primary: "#775CFF",
        primaryDark: "#BE3455",
        routerFirst: "#5533FF",
        routerSecond: "#6647FF",
        routerFirstDark: "#A02C47",
        routerSecondDark: "#B0304E",
        gray: "#3e3e3e"
      },
      animation: {
        "spin-slow": "spin 10s linear infinite"
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5FBEF 5px, #F5FBEF 100px)",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #021212 8px, #021212 100px)",
        circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#F5FBEF 5px,#F5FBEF 80px)",
        circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#021212 8px,#021212 80px)",
        circularLightMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#F5FBEF 5px,#F5FBEF 60px)",
        circularDarkMd: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#021212 8px,#021212 60px)",
        circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#F5FBEF 5px,#F5FBEF 40px)",
        circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#021212 8px,#021212 40px)",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
    
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
    
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
    
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
    
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}

