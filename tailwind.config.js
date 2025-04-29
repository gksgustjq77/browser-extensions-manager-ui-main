// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        50: "50px", // 50px 높이 추가
        60: "60px",
      },
      backgroundImage: {
        "blue-fade": "linear-gradient(180deg, #040918 0%, #091540 100%)",
      },
      screens: {
        xs: "480px", // xs (480px 이상)
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
