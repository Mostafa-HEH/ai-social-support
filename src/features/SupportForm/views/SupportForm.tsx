import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import {
  UserForm,
  userFormDefaultValues,
  type UserFormValues,
} from "../validations/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import FormActions from "./steps/FormActions";
import Steper from "./steps/Steper";
import { useState } from "react";
import { StepperContext } from "./steps/StepperContext";

const SupportForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserForm),
    mode: "all",
    defaultValues: userFormDefaultValues,
  });

  const { handleSubmit } = form;

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <StepperContext.Provider value={{ activeStep, setActiveStep }}>
          <Steper />
          <FormActions />
        </StepperContext.Provider>
      </FormProvider>
    </Stack>
  );
};

export default SupportForm;
