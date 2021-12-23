module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '15': '3.75rem',
        'half-sreen': '50vh',
      },
      maxWidth: {
        "400": "400px",
      },
      maxHeight: {
        '15': '3.75rem',
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
    },
  },
  plugins: [],
}
