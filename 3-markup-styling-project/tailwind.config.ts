import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      lineHeight: {
        "1": "4px",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      screens: {
        "sm-little": "480px", // Phone
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
  plugins: [
    plugin(({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
