import Plugin from 'tailwindcss/plugin';

export const container = Plugin(({ matchComponents, theme }) => {
  matchComponents(
    {
      container: value => ({
        margin: '0 auto',
        width: theme('width.full'),
        maxWidth: value
      })
    },
    { values: theme('screens') }
  );
});
