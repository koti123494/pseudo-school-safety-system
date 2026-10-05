import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg)",
        secondaryBg: "var(--secondary-bg)",
        surfaceBg: "var(--surface-bg)",
        surfaceHover: "var(--surface-hover)",
        cardBg: "var(--card-bg)",
        codeBlock: "var(--code-bg)",
        primaryAccent: "var(--primary-accent)",
        secondaryAccent: "var(--secondary-accent)",
        accentGlow: "var(--accent-glow)",
        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        borderSubtle: "var(--border-subtle)",
        borderHighlight: "var(--border-highlight)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px var(--accent-glow)",
        glowSuccess: "0 0 25px -5px rgba(34, 197, 94, 0.4)",
        glowError: "0 0 25px -5px rgba(239, 68, 68, 0.4)",
        card: "var(--card-shadow)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
