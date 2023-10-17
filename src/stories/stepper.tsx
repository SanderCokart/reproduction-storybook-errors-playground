import { AnimatePresence, motion } from 'framer-motion';
import { GiCheckMark } from 'react-icons/gi';

import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import type { StepperProps } from './stepper-types';

import { animationFade, animationSlideInOut } from '@/animations';
import { cn } from '@/lib/utils';
import { StepperContextProvider } from '@/stories/useStepper';

const BaseLine = ({ width }: { width: CSSProperties['width'] }) => (
  <div className="absolute left-1/2 top-1/2 h-[4px] -translate-y-1/2 bg-muted-foreground" style={{ width }} />
);

const ActiveLine = (props: { width: CSSProperties['width'] }) => (
  <motion.div
    animate={{ width: props.width }}
    className="absolute left-1/2 top-1/2 h-[4px] -translate-y-1/2 bg-primary"
  />
);

const CompletedLine = (props: { width: CSSProperties['width'] }) => (
  <motion.div
    animate={{ width: props.width }}
    className="absolute left-1/2 top-1/2 h-[4px] -translate-y-1/2 bg-success"
  />
);

/**
 * A stepper component that allows you to create a step-by-step process for example a form.
 */
export const Stepper = ({
  steps,
  className,
  childrenAnimation = 'slide',
  instructionsAnimation = 'fade',
  activeStepTuple = [0, 0],
  setActiveStepTuple,
  ...restOfProps
}: StepperProps) => {
  const determineAnimationFor = (animation: string) => {
    switch (animation) {
      case 'fade':
        return animationFade;
      case 'slide':
        return animationSlideInOut;
      default:
        return animationFade;
    }
  };

  const activeStep = activeStepTuple[0];
  const direction = activeStepTuple[1];

  const goToNextStep = () => {
    setActiveStepTuple(prevState => [prevState[0] + 1, 1]);
  };

  const goToPreviousStep = (step?: number) => {
    if (step !== undefined && step >= 0 && step < activeStep) {
      setActiveStepTuple([step, -1]);
    } else if (activeStep > 0) {
      setActiveStepTuple(prevState => [prevState[0] - 1, -1]);
    }
  };

  return (
    <StepperContextProvider
      value={{
        activeStepTuple,
        goToNextStep,
        goToPreviousStep,
        setActiveStepTuple,
      }}>
      <div className={cn('container-lg mx-auto flex flex-col gap-8', className)} {...restOfProps}>
        <div className="px-8">
          <h1>{steps[activeStep].title}</h1>
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={steps[activeStep].title}
                custom={direction}
                {...determineAnimationFor(instructionsAnimation)}>
                <h1>{steps[activeStep].title}</h1>
                <p>{steps[activeStep].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between">
          {steps.map((_, index) => {
            const isCompleted = index < activeStep;

            return (
              <div
                key={index}
                className={cn('relative flex grow justify-center', [
                  index === activeStep && 'group/active',
                  isCompleted && 'group/completed',
                ])}>
                {index === 0 && (
                  <>
                    <BaseLine width={`${100 * (steps.length - 1)}%`} />
                    <ActiveLine width={`${100 * activeStep}%`} />
                    <CompletedLine width={`${100 * (activeStep <= 0 ? 0 : activeStep - 1)}%`} />
                  </>
                )}

                <StepButton
                  disabled={index >= activeStep}
                  isDelayed={index === activeStep}
                  onClick={() => {
                    goToPreviousStep(index);
                  }}>
                  {index + 1}
                </StepButton>
              </div>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div key={activeStep} custom={direction} {...determineAnimationFor(childrenAnimation)}>
            <div className="py-0">{steps[activeStep].component}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </StepperContextProvider>
  );
};

interface StepButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDelayed?: boolean;
}

const StepButton = ({ children, isDelayed, className, ...restOfProps }: StepButtonProps) => {
  return (
    <button
      {...restOfProps}
      className={cn(
        isDelayed && 'delay-500',
        'relative z-10 grid h-[40px] w-[40px] place-items-center rounded-full bg-muted transition-all',
        'font-bold text-muted-foreground',
        'group/button group-[]/active:bg-primary group-[]/active:text-primary-foreground group-[]/active:ring-2 group-[]/active:ring-primary group-[]/active:ring-offset-4',
        'group-[]/completed:focus:bg-primary-dark [@media(hover:hover)]:group-[]/completed:hover:bg-primary-dark group-[]/completed:bg-success group-[]/completed:text-primary-foreground',
        className,
      )}
      type="button">
      <GiCheckMark className="absolute grid place-items-center opacity-0 transition-opacity group-hover/completed:group-hover/button:opacity-0 group-focus-within/completed:group-focus/button:opacity-0 group-[]/completed:opacity-100" />
      <span className="transition-opacity group-hover/button:opacity-100 group-focus/button:opacity-100 group-[]/completed:opacity-0">
        {children}
      </span>
    </button>
  );
};
