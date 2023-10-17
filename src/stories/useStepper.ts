import { createContext, useContext } from 'react';

import type { Dispatch, SetStateAction } from 'react';
import type { StepTuple } from './stepper-types';

interface InnoStepperContextType {
  goToNextStep: () => void;
  goToPreviousStep: (step?: number) => void;
  setActiveStepTuple: Dispatch<SetStateAction<StepTuple>>;
  activeStepTuple: StepTuple;
}

const InnoStepperContext = createContext<InnoStepperContextType | null>(null);

export const useStepper = () => {
  const context = useContext(InnoStepperContext);

  if (!context) {
    throw new Error('useStepper must be used within a Stepper');
  }

  return context;
};

export const StepperContextProvider = InnoStepperContext.Provider;
