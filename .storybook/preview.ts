import { withThemeByClassName } from '@storybook/addon-themes';

import type { Preview } from '@storybook/react';

import '@/tailwind.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],

  parameters: {
    backgrounds: {
      default: 'Theme',
      values: [
        {
          name: 'Theme',
          value: 'hsl(var(--background))',
        },
        {
          name: 'White',
          value: '#fff',
        },
        {
          name: 'Black',
          value: '#000',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
