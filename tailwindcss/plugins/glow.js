import Plugin from 'tailwindcss/plugin';

export const glow =  Plugin(({
    matchUtilities,
    theme
}) => {
  matchUtilities({ glow: (value) => ({ boxShadow: `${value} 0 0 5px 0` }) }, { values: theme('colors') });
});