/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          100: "#231d6a",
          200: "#010134",
        },
        cornflowerblue: {
          100: "#8d8cda",
          200: "#7373c2",
        },
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.72)",
        black: "#000",
        darkslategray: "#333",
        powderblue: "#86cfd0",
        slateblue: "rgba(86, 72, 187, 0.4)",
        cadetblue: {
          100: "#549c9e",
          200: "rgba(84, 156, 158, 0.09)",
        },
        "gray-light": "#f6f7fc",
        lightgray: "#ccc",
        silver: "#c5c5c5",
      },
      spacing: {},
      fontFamily: {
        "sub-header": "Outfit",
        h2: "Roboto",
        heebo: "Heebo",
      },
      borderRadius: {
        xl: "20px",
        "41xl": "60px",
        "2xl": "21px",
        "6xs": "7px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      lg: "18px",
      xl: "20px",
      "40xl": "59px",
      "16xl": "35px",
      "28xl": "47px",
      "68xl": "87px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
