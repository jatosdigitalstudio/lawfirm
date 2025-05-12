/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          text: ['var(--font-text)'],
          style: ['var(--font-style)'],
        },
        colors: {
          maroon: "#652126",
          cream: "#1B3251"
        },
       
      },
    },
    plugins: [],
  };
  