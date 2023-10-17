import Plugin from 'tailwindcss/plugin';

//it works but not perfect, wait for tailwindcss to release group-has-variant
export const groupPeer = Plugin(({ addVariant }) => {
  let pseudoVariants = ['checked', 'disabled'].map(variant =>
    Array.isArray(variant) ? variant : [variant, `&:${variant}`]
  );

  for (let [variantName, state] of pseudoVariants) {
    addVariant(`group-peer-${variantName}`, ctx => {
      let result = typeof state === 'function' ? state(ctx) : state;

      return result.replace(/&(\S+)/, ':merge(.peer)$1 ~ .group &');
    });
  }
});
