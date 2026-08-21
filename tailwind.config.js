/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1a17",
        parchment: {
          DEFAULT: "#f2ede3",
          2: "#e8e1d2",
        },
        oxblood: {
          DEFAULT: "#7a2e2e",
          dark: "#5e2222",
          light: "#8f3838",
        },
        slate: {
          DEFAULT: "#26312d",
          2: "#31403a",
        },
        brass: "#a98554",
        muted: "#5c574c",
        "paper-line": "rgba(28,26,23,0.14)",
      },
      fontFamily: {
        display: ["var(--font-nunito)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        mono: ["var(--font-nunito)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      borderRadius: {
        DEFAULT: "3px",
      },
      transitionDuration: {
        150: "150ms",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        premium: "0 24px 48px -24px rgba(28,26,23,0.32)",
        "premium-dark": "0 24px 48px -20px rgba(0,0,0,0.55)",
        "glow-oxblood": "0 0 0 1px rgba(122,46,46,0.28), 0 20px 44px -22px rgba(122,46,46,0.32)",
        "glow-brass": "0 0 0 1px rgba(169,133,84,0.32), 0 20px 44px -22px rgba(169,133,84,0.3)",
      },
    },
  },
  plugins: [],
};
