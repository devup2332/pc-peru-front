import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        customShadow: "0px 0px 22px 1px rgba(66, 68, 90, 0.52);",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        "custom-light": {
          colors: {
            background: "#ffffff",
            foreground: "#000000",
            primary: {
              50: "#ECE5FF",
              100: "#DFD3FE",
              200: "#BFA8FE",
              300: "#9C7DFD",
              400: "#7F5CFB",
              500: "#5127F9",
              600: "#3D1CD6",
              700: "#2C13B3",
              800: "#1E0C90",
              900: "#140777",
              DEFAULT: "#5127F9",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
