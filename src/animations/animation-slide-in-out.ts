import type { Animation } from '@/types/animation';

export const animationSlideInOut: Animation = {
  animate: 'animate',
  exit: 'exit',
  initial: 'initial',
  variants: {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: 'spring'
      },
      x: 0,
      zIndex: 1
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? '500px' : '-500px',
      zIndex: 0
    }),
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? '500px' : '-500px'
    })
  }
};
