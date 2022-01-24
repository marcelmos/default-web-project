module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        'half-sreen': '50vh',
        "400": "400px",
        "250": "250px",
        '15': '3.75rem',
        "250": "250px",
        "700": "700px",
        "800": "800px",
      },
      "colors": {
        "coal": {
          "50": "#696466",
          "100": "#5f5a5c",
          "200": "#555052",
          "300": "#4b4648",
          "400": "#413c3e",
          "500": "#373234",
          "600": "#2d282a",
          "700": "#231e20",
        },
        "light": "#F4F2F0",
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        slideIn: "slideIn .5s ease-in forwards"
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-40rem)" },
          "100%": { transform: "translateX(0)" }
        },
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["motion-safe"],
  },
}
