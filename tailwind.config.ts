import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-white": "#f9f9f9", // Replace '#f9f9f9' with your desired white color code.
        "my-beige": "#e7d9bf", // Replace '#f9f9f9' with your desired white color code.
        "my-green": "#015A2E", // Replace '#2e7d32' with your desired green color code.
        "my-orange": "#FF780D",
        "my-brown": "#3B1D1D",
      },
    },
  },
  plugins: [],
} satisfies Config;
