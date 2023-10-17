import { useState } from 'react';

import type { StepperProps, StepTuple } from './stepper-types';
import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from './stepper';

const ExampleForm = ({ title }: { title: string }) => {
  return (
    <form>
      <div className="grid place-items-center gap-8 p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <input className="block" placeholder="test@example.com" type="email" />
        <input className="block" placeholder="Pa$$w0rd" type="password" />
        <input className="block" placeholder="age" type="number" />
      </div>
    </form>
  );
};

const steps: StepperProps['steps'] = [
  {
    component: <ExampleForm title="Example form 1" />,
    title: 'This is the first step.',
    description: 'This is the description of the first step.',
  },
  {
    component: <ExampleForm title="Example form 2" />,
    title: 'This is the second step.',
    description: 'This is the description of the second step.',
  },
  {
    component: <ExampleForm title="Example form 3" />,
    title: 'This is the third step.',
    description: 'This is the description of the third step.',
  },
  {
    component: <ExampleForm title="Example form 4" />,
    title: 'This is the fourth step.',
    description: 'This is the description of the fourth step.',
  },
  {
    component: <ExampleForm title="Example form 5" />,
    title: 'This is the fifth step.',
    description: 'This is the description of the fifth step.',
  },
];

type Story = StoryObj<typeof Stepper>;

const meta: Meta<typeof Stepper> = {
  args: {
    steps,
    activeStepTuple: [0, 0],
  },
  argTypes: {
    setActiveStepTuple: { table: { type: { detail: 'setState([number, 1 | -1 | 0])' } }, control: { type: null } },
    steps: { table: { type: { detail: '{instructions: string; component: ReactNode}[]' } } },
    activeStepTuple: { table: { type: { detail: '[number, 1 | -1 | 0]' } } },
  },
  component: Stepper,
  title: 'Forms/Stepper',
};

export default meta;

export const Default = () => {
  const [activeStepTuple, setActiveStepTuple] = useState<StepTuple>([0, 0]);

  const next = () => {
    if (activeStepTuple[0] < steps.length - 1) setActiveStepTuple([activeStepTuple[0] + 1, 1]);
  };

  const previous = () => {
    if (activeStepTuple[0] > 0) setActiveStepTuple([activeStepTuple[0] - 1, -1]);
  };

  return (
    <div>
      <Stepper activeStepTuple={activeStepTuple} setActiveStepTuple={setActiveStepTuple} steps={steps} />
      <div className="flex justify-evenly">
        <button className="bg-primary rounded px-4 py-1" onClick={previous}>
          Previous
        </button>
        <button className="bg-primary rounded px-4 py-1" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};
