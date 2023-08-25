/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  darkMode: 'class',
  theme: {
    colors: { //自定义颜色
      'custom': 'yellow',
      'pink': '#ff49db',
      'tahiti': {
        100: 'orange',
        200: '#a5f3fc',
        DEFAULT: '#06b6d4',
      }
    },
    extend: { //主题色
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        separator: "rgb(var(--color-separator) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--color-foreground) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

