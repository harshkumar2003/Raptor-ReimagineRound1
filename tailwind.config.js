/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'custom-br': '55px',
        'custom-s-lg': '30px',
      },
      screens: {
        'sm':{'max':'767px'},
        'md':{'min':'768px','max':'1023px'},
        'lg':{'min':'1024px','max':'1279px'},
        'xl':{'min':'1280px','max':'1535px'},
        '2xl':{'min':'1536px'},
        
      },
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'Tiro': ['Tiro Devanagari Hindi', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },

      placeholderColor: {
        'gray': '#6B7280', // Customize as needed
      },
      fontSize: {
        'placeholder-lg': '1.125rem', // Customize as needed
      },
    },
    colors: {
      'gradient-start': '#EF1B1B', // Start color (red)
      'gradient-end': '#EB8728', // End color (orange)
    },
    backgroundImage: {
      'gradient-to-br': 'linear-gradient(9.35deg, #EF1B1B 2.9%, #EB8728 99.73%)',
    },
    
    backgroundImage: {
      'gradient-to-custom': 'linear-gradient(102.34deg, #EF1B1B 1.44%, #EB8728 91.31%)',
      'gradient-to-custom1': 'linear-gradient(102.34deg, #FFB74D 1.44%, #E53935 91.31%)',
      'gradient-custom': 'linear-gradient(180deg, #E6F7FF 0%, #EB8728 100%)',
    },
    
    boxShadow: {
      'custom': '0px 4px 7px rgba(0, 0, 0, 0.25)',
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.placeholder-gray': {
          '&::placeholder': {
            color: '#6B7280',
          },
        },
        '.placeholder-italic': {
          '&::placeholder': {
            fontStyle: 'italic',
          },
        },
        '.placeholder-center': {
          '&::placeholder': {
            textAlign: 'center',
          },
        },
        '.placeholder-text-lg': {
          '&::placeholder': {
            fontSize: '1.125rem',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
