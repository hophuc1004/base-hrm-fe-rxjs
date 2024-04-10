/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "color-main": "#FF0040",
        black: {
          "custom-1": "rgba(32, 50, 57, 0.7)",
        },
        red: {
          "custom-2": "#CF0029",
        },
      },
      boxShadow: {
        "xs-custom": "0px 3px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "bg-login-right":
          "url('~/public/assets/images/login/imageIntroHR.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
