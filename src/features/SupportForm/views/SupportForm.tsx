import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { UserForm, type UserFormValues } from "../validations/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInformations from "./steps/PersonalInformations";
import Situation from "./steps/Situation";
import FamilyAndFinancial from "./steps/FamilyAndFinancial";
import FormActions from "./steps/FormActions";

const SupportForm = () => {
  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserForm),
    mode: "all",
  });

  const { handleSubmit } = form;

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <PersonalInformations />
        <FamilyAndFinancial />
        <Situation />
        <FormActions />
      </FormProvider>
    </Stack>
  );
};

export default SupportForm;
