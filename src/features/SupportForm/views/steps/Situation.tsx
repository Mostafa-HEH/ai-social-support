import { Controller, useFormContext } from "react-hook-form";
import type { UserFormValues } from "../../validations/formValidations";
import { Grid } from "@mui/material";
import { generateSuggestion } from "../../../../shared/api";
import { typewriter } from "../../../../shared/services";
import {
  buildEmploymentCircumstancesPrompt,
  buildFinancialSituationPrompt,
  buildReasonForApplyingPrompt,
} from "../../services/prompts";
import { useState } from "react";
import TextFieldWithAi from "../../../../shared/components/TextFieldWithAi/TextFieldWithAi";

const Situation = () => {
  const [aiPreview, setAiPreview] = useState<
    Partial<Record<keyof UserFormValues, string>>
  >({});
  const { control, setValue, getValues, trigger } =
    useFormContext<UserFormValues>();

  const generateAiText = async ({
    field,
    prompt,
  }: {
    field: keyof UserFormValues;
    prompt: string;
  }) => {
    const text = await generateSuggestion(prompt);

    setAiPreview((prev) => ({
      ...prev,
      [field]: "",
    }));

    await typewriter(text, (value) => {
      setAiPreview((prev) => ({
        ...prev,
        [field]: value,
      }));
    });
  };

  const financialPrompt = buildFinancialSituationPrompt(getValues());
  const circumstancesPrompt = buildEmploymentCircumstancesPrompt(getValues());
  const applayReason = buildReasonForApplyingPrompt(getValues());

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="current_financial_situation"
          control={control}
          render={({ field, fieldState }) => (
            <TextFieldWithAi
              label="Current Financial Situation"
              placeholder="Describe your current financial situation"
              field={field}
              error={fieldState.error?.message}
              aiPreview={aiPreview[field.name]}
              onGenerateAi={() =>
                generateAiText({
                  field: field.name,
                  prompt: financialPrompt,
                })
              }
              onAcceptAi={() => {
                setValue(field.name, aiPreview[field.name]!, {
                  shouldDirty: true,
                });
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }));
                trigger(field.name);
              }}
              onDiscardAi={() =>
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="employment_circumstances"
          control={control}
          render={({ field, fieldState }) => (
            <TextFieldWithAi
              label="Employment Circumstances"
              placeholder="Describe your Employment Circumstances"
              field={field}
              error={fieldState.error?.message}
              aiPreview={aiPreview[field.name]}
              onGenerateAi={() =>
                generateAiText({
                  field: field.name,
                  prompt: circumstancesPrompt,
                })
              }
              onAcceptAi={() => {
                setValue(field.name, aiPreview[field.name]!, {
                  shouldDirty: true,
                });
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }));
                trigger(field.name);
              }}
              onDiscardAi={() =>
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }))
              }
            />
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="reason_for_applying"
          control={control}
          render={({ field, fieldState }) => (
            <TextFieldWithAi
              label="Reason for Applying"
              placeholder="Describe your Reason for Applying"
              field={field}
              error={fieldState.error?.message}
              aiPreview={aiPreview[field.name]}
              onGenerateAi={() =>
                generateAiText({
                  field: field.name,
                  prompt: applayReason,
                })
              }
              onAcceptAi={() => {
                setValue(field.name, aiPreview[field.name]!, {
                  shouldDirty: true,
                });
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }));
                trigger(field.name);
              }}
              onDiscardAi={() =>
                setAiPreview((prev) => ({
                  ...prev,
                  [field.name]: undefined,
                }))
              }
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Situation;
