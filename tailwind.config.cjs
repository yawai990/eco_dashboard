/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors : {
          "primary":"#FB2576",
          "gray":"#393E46",
          "head-gray":"#6B728E"
        },
        backgroundColor:{
          "primary":"#FB2576",
        }
      },
    },
    plugins: [],
  }