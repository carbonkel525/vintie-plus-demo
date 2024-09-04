/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "url-blue": "#32e2ff",
      },
    },
    screens: {
      "mobile-m": { max: "425px" }, // Voor schermen tot 425px breed
      "tablet": { max: "640px" },   // Voor schermen tot 640px breed
      "laptop": { max: "1280px" },  // Voor schermen tot 1024px breed
      "desktop": { min: "1280px" }, // Voor schermen breder dan 1280px
    },
  },
  plugins: [],
};
