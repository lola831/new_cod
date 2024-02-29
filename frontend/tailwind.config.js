/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',

    },
    extend: {
      colors: {
        vuejs: {
          100: "#DAFFFB",
          200: "#64CCC5",
          300: "#176B87",
          400: "#04364A",
        },
        "my": {
          "50": "#e8fbfa",
          "100": "#d0f7f5",
          "200": "#a1efec",
          "300": "#73e7e2",
          "400": "#44dfd9",
          "500": "#15d7cf",
          "600": "#11aca6",
          "700": "#0d817c",
          "800": "#085653",
          "900": "#042b29"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
