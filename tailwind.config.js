/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        main: '#13D080',
        gray1: '#c3c3c3',
        gray2: '#CBD5E2',
        gray3: '#6B6A6A',
        gray4: '#414141',
        contentGray: '#2e2e2e',
        borderGray1: '#A5A5A5',
        modalbg: 'rgba(0, 0, 0, 0.1)',
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
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
      fontFamily: {
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms'), require("tailwind-scrollbar-hide")], 
};

// mode: 'jit',
// content: ['pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
// theme: {
//   extend: {
//     spacing: {
//       1: '1px',
//       2: '2px',
//       //...
//     },
//     fontSize: {
//       'title-0': '90px',
//       //...
//       'head-0': '45px',
//       //...
//       'body-1': '18px',
//       //...
//       'caption-1': '12px',
//       //...
//     },
//     fontFamily: {
//       garamond: 'GaramondPremrPro, Arial, sans-serif',
//       noto: 'Noto Sans, Arial, sans-serif',
//     },
//     fontWeight: {
//       ultralight: 100,
//       light: 200,
//       thin: 300,
//       normal: 400,
//       medium: 500,
//       semibold: 600,
//       bold: 700,
//       extrabold: 800,
//       black: 900,
//     },
//     lineHeight: {
//       default: '1.2',
//       12: '12px',
//       //...
//     },
//     minWidth: {
//       320: '320px',
//       //...
//     },
//     maxWidth: {
//       140: '140px',
//       //...
//     },
//     minHeight: {
//       882: '882px',
//     },
//     maxHeight: {
//       460: '460px',
//     },
//     boxShadow: {
//       sm: '0px 0px 8px rgba(0, 0, 0, 0.1)',
//       md: '0px 2px 16px rgba(0, 0, 0, 0.1)',
//       lg: '0px 4px 32px rgba(0, 0, 0, 0.1)',
//     },
//     keyframes: {
//       show: {
//         '0%': { transform: 'scale(0)', opacity: 1 },
//         '100%': { transform: 'scale(1)', opacity: 1 },
//       },
//       fadeIn: {
//         '0%': { opacity: 0 },
//         '100%': { opacity: 1 },
//       },
//     },

//     animation: {
//       show: 'show 200ms cubic-bezier(.6, 0, .4, 1) 1000ms forwards',
//       fadeIn: 'fadeIn 300ms cubic-bezier(.6, 0, .4, 1) forwards',
//     },
//   },
//   screens: {
//     xsm: '360px',
//     sm: '428px',
//     md: '768px',
//     lg: '1024px',
//     xl: '1280px',
//   },
// },
// variants: {
//   extend: {
//     backgroundColor: ['disabled'],
//   },
// },
// plugins: [
//   plugin(({ addComponents }) => {
//     const components = {
//       '.flex-center': {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//     };
//     addComponents(components);
//   }),
// ],
