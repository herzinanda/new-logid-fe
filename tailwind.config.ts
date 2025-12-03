import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'primary-tp-light-orange': '#fff6f2',
        'primary-light-orange': '#ffe1d5',
        'primary-orange': '#149CDC',
        'secondary-light-navy': '#698996',
        'secondary-navy': '#222e3c',
        'base-white': '#fff',
        'base-white-background': '#eee',
        'base-grey-stroke': '#c8c8c8',
        'base-grey': '#616161',
        'base-black': '#111',
      },
    },
  },
  plugins: [
    // You might want to add this for the article styling
    // require('@tailwindcss/typography'), 
  ],
};
export default config;