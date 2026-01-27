import { Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { UserForm, type UserFormValues } from "../validations/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";

const SupportForm = () => {
  const { handleSubmit } = useForm<UserFormValues>({
    resolver: zodResolver(UserForm),
    mode: "all",
  });

  const onSubmit = (data: UserFormValues) => {
    console.log(data);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Button variant="contained">test</Button>
    </Stack>
  );
};

export default SupportForm;
