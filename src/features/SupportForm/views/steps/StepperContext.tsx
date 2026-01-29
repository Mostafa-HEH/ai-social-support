import { createContext, useContext } from "react";

type StepperContextType = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  isSubmitting: boolean;
};

export const StepperContext = createContext<StepperContextType | undefined>(
  undefined,
);

export const useStepper = () => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("useStepper must be used inside StepperProvider");
  }

  return context;
};
