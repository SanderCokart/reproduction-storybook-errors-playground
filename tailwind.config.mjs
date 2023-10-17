import containerQueriesPlugin from '@tailwindcss/container-queries';
import animatePlugin from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

import {heights} from './tailwindcss/extends';
import {
  container,
  dashedLines,
  glow,
  groupPeer,
  loading,
  minWScreen,
  notFirst,
  textHeight
} from './tailwindcss/plugins';

const innosendPlugins = [
  container,
  glow,
  loading,
  minWScreen,
  notFirst,
  groupPeer,
  textHeight,
  dashedLines
];

const tailwindPlugins = [animatePlugin, containerQueriesPlugin];

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './.storybook/preview.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@innosend/frontend-react-components/dist/**/*.{mjs,mts,js,jsx,ts,tsx,cjs}'
  ],
  darkMode: 'class',
  plugins: [...innosendPlugins, ...tailwindPlugins],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        background: 'hsl(var(--background) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        error: {
          DEFAULT: 'hsl(var(--error) / <alpha-value>)',
          foreground: 'hsl(var(--error-foreground) / <alpha-value>)'
        },
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        info: {
          DEFAULT: 'hsl(var(--info) / <alpha-value>)',
          foreground: 'hsl(var(--info-foreground) / <alpha-value>)'
        },
        input: 'hsl(var(--input) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },

        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        primary: {
          'DEFAULT': 'hsl(var(--primary) / <alpha-value>)',
          'foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
          'foreground-inverted': 'hsl(var(--primary-foreground-inverted) / <alpha-value>)'
        },
        ring: 'hsl(var(--ring) / <alpha-value>)',
        secondary: {
          'DEFAULT': 'hsl(var(--secondary) / <alpha-value>)',
          'foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
          'foreground-inverted': 'hsl(var(--secondary-foreground-inverted) / <alpha-value>)'
        },
        success: {
          DEFAULT: 'hsl(var(--success) / <alpha-value>)',
          foreground: 'hsl(var(--success-foreground) / <alpha-value>)'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
          foreground: 'hsl(var(--warning-foreground) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'}
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0}
        }
      },
      ...heights,
      /* eslint-disable */
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2048px',
        '5xl': '2560px',
        '6xl': '3840px'
      },
      /* eslint-enable */
    }
  }
};

export default tailwindConfig;
