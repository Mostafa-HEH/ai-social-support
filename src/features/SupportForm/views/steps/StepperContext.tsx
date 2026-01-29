import { createContext, useContext } from "react";

export type SubmitStatusType = {
  error: null | string;
  success: null | string;
};

type StepperContextType = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  submitStatus: SubmitStatusType;
  setSubmitStatus: React.Dispatch<React.SetStateAction<SubmitStatusType>>;
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
