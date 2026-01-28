import { Controller, useFormContext } from "react-hook-form";
import type { UserFormValues } from "../../validations/formValidations";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { generateSuggestion } from "../../../../shared/api";
import { typewriter } from "../../../../shared/services";
import { buildFinancialSituationPrompt } from "../../services/prompts";

const Situation = () => {
  const { control, setValue, getValues } = useFormContext<UserFormValues>();

  const generateAiText = async ({
    field,
    prompt,
  }: {
    field: keyof UserFormValues;
    prompt: string;
  }) => {
    const text = await generateSuggestion(prompt);

    setValue(field, "", {
      shouldDirty: true,
    });

    await typewriter(text, (value) => {
      setValue(field, value, {
        shouldDirty: true,
        shouldTouch: true,
      });
    });
  };

  const financialPropmt = buildFinancialSituationPrompt(getValues());

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="current_financial_situation"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Current Financial Situation</FormLabel>
              <TextField
                {...field}
                multiline
                rows={4}
                placeholder="Describe your current financial situation"
              />
              <Button
                onClick={() =>
                  generateAiText({
                    field: "current_financial_situation",
                    prompt: financialPropmt,
                  })
                }
              >
                Help Me
              </Button>
              <FormHelperText>
                {error?.message ||
                  "Please describe your current financial situation"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="employment_circumstances"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Employment Circumstances</FormLabel>
              <TextField
                {...field}
                multiline
                rows={4}
                placeholder="Describe your employment circumstances"
              />
              <FormHelperText>
                {error?.message ||
                  "Please describe your employment circumstances"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="reason_for_applying"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Reason for Applying</FormLabel>
              <TextField
                {...field}
                multiline
                rows={4}
                placeholder="Explain why you are applying for support"
              />
              <FormHelperText>
                {error?.message || "Please explain your reason for applying"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Situation;
