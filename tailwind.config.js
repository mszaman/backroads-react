/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        primary: {
          1: "hsl(184, 91%, 17%)",
          2: "hsl(185, 84%, 25%)",
          3: "hsl(185, 81%, 29%)",
          4: "hsl(184, 77%, 34%)",
          /* primary/main color */
          5: "hsl(185, 62%, 45%)",
          /* lighter shades of primary color */
          6: "hsl(185, 57%, 50%)",
          7: "hsl(184, 65%, 59%)",
          8: "hsl(184, 80%, 74%)",
          9: "hsl(185, 94%, 87%)",
          10: "hsl(186, 100%, 94%)",
        },
        grey: {
          1: "hsl(209, 61%, 16%)",
          2: "hsl(211, 39%, 23%)",
          3: "hsl(209, 34%, 30%)",
          4: "hsl(209, 28%, 39%)",
          /* grey used for paragr,phs */
          5: "hsl(210, 22%, 49%)",
          6: "hsl(209, 23%, 60%)",
          7: "hsl(211, 27%, 70%)",
          8: "hsl(210, 31%, 80%)",
          9: "hsl(212, 33%, 89%)",
          10: "hsl(210, 36%, 96%)",
        },
      },
    },
    screens: {
      xs: "576px",
      sm: "768px",
      md: "800px",
      lg: "992px",
      xl: "1170px",
    },
  },
  plugins: [],
};
