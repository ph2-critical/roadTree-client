/** @type {import('tailwindcss').Config} */

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        128: "32rem",
      },
      height: {
        screenWithoutHeader: "calc(100vh - 73px)",
      },
      boxShadow: {
        "deep-dark":
          "var(--ds-shadow-overlay,0 2px 4px 0 rgba(0,0,0,0.5),0 0 0 1px rgba(9,30,66,0.08))",
      },
      colors: {
        main: "#13D080",
        gray1: "#c3c3c3",
        gray2: "#CBD5E2",
        gray3: "#6B6A6A",
        gray4: "#414141",
        gray5: "#F0F2F7",
        gray6: "#ececec",
        black1: "#383838",
        black2: "#505050",
        todoColor: "#e3f6ed",
        doingColor: "#9adfbe",
        doneColor: "#489d72",
        contentGray: "#2e2e2e",
        borderGray1: "#A5A5A5",
        modalbg: "rgba(0, 0, 0, 0.1)",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },

      fontWeight: {
        ultralight: 100,
        light: 200,
        thin: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
  ],
};
