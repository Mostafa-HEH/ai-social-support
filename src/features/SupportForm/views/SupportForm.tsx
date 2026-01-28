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

const SupportForm = () => {
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
        <Steper />
        <FormActions />
      </FormProvider>
    </Stack>
  );
};

export default SupportForm;
