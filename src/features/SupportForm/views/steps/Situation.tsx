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
import { useTranslation } from "react-i18next";

const Situation = () => {
  const { t } = useTranslation();
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
              label={t("form.currentFinancialSituation.label")}
              placeholder={t("form.currentFinancialSituation.placeholder")}
              field={field}
              error={
                fieldState.error?.message
                  ? t(fieldState.error.message)
                  : undefined
              }
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
              label={t("form.employmentCircumstances.label")}
              placeholder={t("form.employmentCircumstances.placeholder")}
              field={field}
              error={
                fieldState.error?.message
                  ? t(fieldState.error.message)
                  : undefined
              }
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
              label={t("form.reasonForApplying.label")}
              placeholder={t("form.reasonForApplying.placeholder")}
              field={field}
              error={
                fieldState.error?.message
                  ? t(fieldState.error.message)
                  : undefined
              }
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
