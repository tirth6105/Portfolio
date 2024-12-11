/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#f41a4a",
      white: "#FFFFFF",
      black: "#000000",
      gray700: "#374151",
      slate: "#959595",
    },
    screens: {
      base: "0px",

      ss: "320px",

      mm: "375px",

      sm: "425px",
      // => @media (min-width: 640px) { ... }

      rt: "616px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
