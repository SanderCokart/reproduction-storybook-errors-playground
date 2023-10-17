import type { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react';

interface Step {
  /** The component of the step. */
  component: ReactNode;
  /** The description of the step. */
  description?: string;
  /** The title of the step. */
  title: string;
}

type Direction = 1 | -1 | 0;

type Animations = 'fade' | 'slide';

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /** The active step and direction represented by 1 or -1 and 0 by default. */
  activeStepTuple: StepTuple;
  /**
   * The animation of the children.
   * @default 'slide'
   */
  childrenAnimation?: Animations;
  /**
   * The animation of the instructions.
   * @default 'fade'
   */
  instructionsAnimation?: Animations;
  /** A setState function to set the active step and direction. */
  setActiveStepTuple: Dispatch<SetStateAction<StepTuple>>;
  /**
   * The steps of the stepper.
   * @default []
   */
  steps: Step[];
}

/** the first number is the active step, the second number is the direction and starts with 0 */
export type StepTuple = [number, Direction];
