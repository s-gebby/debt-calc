/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      animation: {
        "vertical-azure-wave": "vertical-azure-wave 2s ease infinite",
        "classic-breathe": "breathe 3s ease-in-out infinite",
        "rose-blush": "rose-blush 5s ease infinite",
      },
      keyframes: {
        "vertical-azure-wave": {
          "0%": {
            "background-size": "100% 500%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
          "50%": {
            "background-size": "100% 500%",
            "background-position": "center bottom",
            "background-image":
              "linear-gradient(to bottom, rgba(164, 209, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(97, 174, 255, 0.8))",
          },
          "100%": {
            "background-size": "100% 500%",
            "background-position": "center top",
            "background-image":
              "linear-gradient(to bottom, rgba(97, 174, 255, 0.8), rgba(131, 192, 255, 0.8), rgba(164, 209, 255, 0.8))",
          },
        },
        breathe: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "rose-blush": {
          "0%": {
            background:
              "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
          "50%": {
            background:
              "linear-gradient(90deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "100% 0%",
          },
          "100%": {
            background:
              "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 100%",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
