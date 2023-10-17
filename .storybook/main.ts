import { resolve } from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async config => {
    config.resolve.alias['@'] = resolve(__dirname, '../src');
    return config;
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        // speeds up storybook build time
        allowSyntheticDefaultImports: true,
        // speeds up storybook build time
        esModuleInterop: true,
        // makes union prop types like variant and size appear as select controls
        shouldExtractLiteralValuesFromEnum: true,
        // makes string and boolean types that can be undefined appear as inputs and switches
        shouldRemoveUndefinedFromOptional: true,
      },
      // Filter out third-party props from node_modules except @radix-ui packages
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) || /@radix-ui/.test(prop.parent.fileName) : true,
    },
  },
};
export default config;
