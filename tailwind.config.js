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
      colors:{
        smoky_black:'#14110f',
        jet:'#34312d',
        gray:'#7e7f83',
        dun:'#d9c5b2',
        light_dun:'rgba(217, 197, 178, 0.5)',
        flash_white:'#f3f3f4'
      }
    },
  },
  plugins: [],
};
