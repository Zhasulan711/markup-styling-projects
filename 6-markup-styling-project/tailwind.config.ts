import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        "sm-lower": "446px",
        "sm-little": "460px",
        "sm-min": "559px", // Phone
        sm: "640px", // Tablet/Phone
        md: "768px", // Tablet/Phone
        lg: "1024px", // PC/Laptop
        xl: "1280px", // PC/Laptop
        "pc-sm": "1366px", // PC/Laptop
        "pc-md": "1440px", // PC/Laptop
        "2xl": "1536px", // PC/Laptop
        "pc-16-9": "1600px", // PC/Laptop
        "pc-full-hd": "1920px", // PC/Laptop
        "pc-2k": "2560px", // PC/Laptop
        "pc-ws": "3440px", // PC
        "pc-4k": "3840px", // PC
      },
    },
  },
  plugins: [],
}
export default config
