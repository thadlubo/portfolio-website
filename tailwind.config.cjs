module.exports = {
  darkMode: "class", // important for future dark mode impl `.dark { ... }` 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        "pistachio-light": "var(--pistachio-light)",
        "pistachio-soft": "var(--pistachio-soft)",
        "pistachio-medium": "var(--pistachio-medium)",
        "pistachio-dark": "var(--pistachio-dark)",
        cream: "var(--cream)",
        "cream-soft": "var(--cream-soft)",
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [],
};