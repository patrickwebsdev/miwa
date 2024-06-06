import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        secondary: {
          0: "#FFFFFF",
          100: "#FCFAF6",
        },
      },
      backgroundImage: {
        home: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),url('/images/background.jpg')",
        grass: "url('/images/grass.svg')",
        footer: "url('/images/footer.png')",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
export default config;
