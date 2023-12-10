import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--color-text) / <alpha-value>)",
        "hero-headphones-cta": "rgb(var(--color-hero-headphones-cta) / <alpha-value>)",
        "main-bg": "rgb(var(--color-background-main) / <alpha-value>)",
        "button-bg": "rgb(var(--color-button-background) / <alpha-value>)",
      },
      backgroundImage: {
        "hero-mw08": "var(--background-hero-mw08)",
        "hero-earphones": "var(--background-hero-earphones)",
        "hero-headphones": "var(--background-hero-headphones)",

        "hero-inner-mw08": "var(--background-hero-inner-mw08)",
        "hero-inner-earphones": "var(--background-hero-inner-earphones)",
        "hero-inner-headphones": "var(--background-hero-inner-headphones)",
      },
      spacing: {
        "2.5": "0.625rem",
        "3.5": "0.875rem",
        "7.5": "1.875rem",
        "4.5": "1.125rem",
      },
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
      }),
      borderRadius: {
        "button": "3.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
