module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#10EFEB",
        tertiary: "#0D3056",
        quaternary: "#1689C8",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
      textStroke: {
        'default': '1px white',
        'lg': '2px black',
        'primary': '1px #011825',
        'secondary': '1px #10EFEB',
        'tertiary': '1px #0D3056',
        'quaternary': '1px #1689C8',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke': '1px #011825',
        },
        '.text-stroke-secondary': {
          '-webkit-text-stroke': '1px #10EFEB',
        },
        '.text-stroke-tertiary': {
          '-webkit-text-stroke': '1px #0D3056',
        },
        '.text-stroke-quaternary': {
          '-webkit-text-stroke': '1px #1689C8',
        },
        '.text-stroke-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};