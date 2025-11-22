const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary Colors
        primary: {
          DEFAULT: "var(--primary-color)",
          color: "var(--primary-color)",
          white: "var(--primary-white)",
          black: "var(--primary-black)",
        },

        // Grays
        gray: {
          200: "var(--gray-200)",
          600: "var(--gray-600)",
        },

        // Pastel Colors - Pink
        pink: {
          light: "var(--pink-light)",
          pastel: "var(--pink-pastel)",
          bg: "var(--pink-bg)",
        },

        // Pastel Colors - Purple
        purple: {
          light: "var(--purple-light)",
          shadow: "var(--purple-shadow)",
        },

        // Pastel Colors - Blue
        blue: {
          light: "var(--blue-light)",
          shadow: "var(--blue-shadow)",
        },

        // Pastel Colors - Green
        green: {
          light: "var(--green-light)",
          shadow: "var(--green-shadow)",
        },

        // Pastel Colors - Yellow
        yellow: {
          light: "var(--yellow-light)",
          shadow: "var(--yellow-shadow)",
        },

        // Pastel Colors - Mint & Sky
        mint: {
          light: "var(--mint-light)",
        },
        sky: {
          light: "var(--sky-light)",
        },
      },
      fontFamily: {
        sans: ["var(--font-dana)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        dana: ["var(--font-dana)", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        // Mobile sizes (default)
        "xs-c": "var(--fs-xs)",
        "sm-c": "var(--fs-sm)",
        "base-c": "var(--fs-base)",
        "lg-c": "var(--fs-lg)",
        "xl-c": "var(--fs-xl)",
        "2xl-c": "var(--fs-2xl)",
        "3xl-c": "var(--fs-3xl)",
        "4xl-c": "var(--fs-4xl)",
        "5xl-c": "var(--fs-5xl)",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
