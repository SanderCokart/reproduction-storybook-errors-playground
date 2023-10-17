import Plugin from 'tailwindcss/plugin';

export const minWScreen = Plugin(({
    matchUtilities,
    theme
}) => {
  matchUtilities({ 'min-w-screen': (value) => ({ minWidth: value }) }, { values: theme('screens') });
});