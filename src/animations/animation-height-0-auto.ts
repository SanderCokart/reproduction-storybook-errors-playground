import type { Animation } from '@/types/animation';

export const animationHeight0Auto: Animation = {
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  variants: {
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        opacity: { delay: 0.1 }
      }
    },
    exit: {
      height: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        opacity: {
          duration: 0.12,
          delay: 0.2
        },
        height: {
          delay: 0.2
        }
      }
    }
  }
};
