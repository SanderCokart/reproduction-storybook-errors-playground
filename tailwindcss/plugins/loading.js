import Plugin from 'tailwindcss/plugin';

export const loading = Plugin(
  ({ addComponents, addUtilities, theme }) => {
    addUtilities({ '@keyframes loading': theme('keyframes.loading') });
    addComponents({
      '.loading': {
        'position': 'relative',
        'overflow': 'hidden',
        '&:after': {
          position: 'absolute',
          inset: '0',
          content: '""',
          backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
          animation: 'loading 1.5s infinite'
        }
      }
    });
  },
  {
    theme: {
      extend: {
        keyframes: {
          loading: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' }
          }
        },
        animation: { loading: 'loading 1.5s infinite' }
      }
    }
  }
);
