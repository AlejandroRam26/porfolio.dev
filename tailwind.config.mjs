/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "slide-in-fwd-bottom":
          "slide-in-fwd-bottom 0.8s cubic-bezier(0.45, 0.67, 0, 0.87) both",
        "slide-in-fwd-left":
          "slide-in-fwd-left 0.8s cubic-bezier(0.45, 0.67, 0, 0.87) both",
        "slide-in-fwd-top":
          "slide-in-fwd-top 0.8s cubic-bezier(0.45, 0.67, 0, 0.87) both",
      },
      keyframes: {
        "slide-in-fwd-top": {
          "0%": {
            transform: "translateZ(-1400px) translateY(-800px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-fwd-bottom": {
          "0%": {
            transform: "translateZ(-1400px) translateY(800px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-fwd-left": {
          "0%": {
            transform: "translateZ(-1400px) translateX(-1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0) translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
