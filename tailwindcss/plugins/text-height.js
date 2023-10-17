import Plugin from 'tailwindcss/plugin';

export const textHeight = Plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'h-text': value => ({ height: value[1].lineHeight }),
      'min-h-text': value => ({ minHeight: value[1].lineHeight })
    },
    { values: theme('fontSize') }
  );
});
