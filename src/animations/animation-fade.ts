import type { Animation } from '@/types/animation';

export const animationFade: Animation = {
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  variants: {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0
    },
    initial: {
      opacity: 0
    }
  }
};
