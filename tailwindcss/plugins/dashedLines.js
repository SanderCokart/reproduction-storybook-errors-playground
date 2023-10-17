import Plugin from 'tailwindcss/plugin';

export const dashedLines = Plugin(({ addComponents, theme }) => {
  addComponents({
    '.dashed-line-vertical-primary': {
      backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent 25%, hsl(var(--primary)) 25%, hsl(var(--primary)) 75%, transparent 75%, transparent 100%)`,
      backgroundSize: '100% 16px'
    }
  });
});
