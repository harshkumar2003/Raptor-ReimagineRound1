// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       borderRadius: {
//         'custom-br': '55px',
//         'custom-s-lg': '30px',
           
//       },
//       screens: {
//         'tablet': '640px',   // Custom breakpoint for tablets

//       },
//       placeholderColor: {
//         'gray': '#6B7280', // Customize as needed
//       },
//       fontSize: {
//         'placeholder-lg': '1.125rem', // Customize as needed
//       },
//     },
//   },
//   plugins: [
//     function({ addUtilities }) {
//       const newUtilities = {
//         '.placeholder-gray': {
//           '&::placeholder': {
//             color: '#6B7280',
//           },
//         },
//         '.placeholder-italic': {
//           '&::placeholder': {
//             fontStyle: 'italic',
//           },
//         },
//         '.placeholder-center': {
//           '&::placeholder': {
//             textAlign: 'center',
//           },
//         },
//         '.placeholder-text-lg': {
//           '&::placeholder': {
//             fontSize: '1.125rem',
//           },
//         },
//       };
//       addUtilities(newUtilities, ['responsive', 'hover']);
//     },
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orangered: "#cb0000",
        mistyrose: "#ffdbdb",
        darkslategray: {
          "100": "#3f3434",
          "200": "#333",
        },
        dimgray: {
          "100": "#665959",
          "200": "#545353",
        },
        black: "#000",
        red: {
          "100": "#f22626",
          "200": "#ff0000",
        },
        whitesmoke: {
          "100": "#f5f3f3",
          "200": "#f4f3f3",
          "300": "#f3f3f3",
        },
        gray: {
          "100": "#7a7878",
          "200": "#202a44",
          "300": "rgba(0, 0, 0, 0.4)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "4xl": "23px",
        sm: "14px",
        "18xl": "37px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "17xl": "36px",
      "3xl": "22px",
      "5xl-4": "24.4px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

