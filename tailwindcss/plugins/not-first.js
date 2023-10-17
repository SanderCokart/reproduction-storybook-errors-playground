import Plugin from 'tailwindcss/plugin';

export const notFirst = Plugin(({ addVariant }) => {
  addVariant('not-first', '&:not(:first-child)');
});