import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': '811px',
      'superMobile' : '281px'
    },
    extend: {
      colors: {
        dark: "#AC3F0C",
        light: "#FBE8A6",
        tabbed: "#0d0d0c",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9" // 80,230,217
      },
    },
  },
  plugins: [],
}
export default config
