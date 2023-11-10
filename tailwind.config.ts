import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#AC3F0C",
        light: "#FBE8A6",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9" // 80,230,217
      },
    },
  },
  plugins: [],
}
export default config
