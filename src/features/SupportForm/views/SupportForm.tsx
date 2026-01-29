import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import {
  UserForm,
  userFormDefaultValues,
  type UserFormValues,
} from "../validations/formValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import Steper from "./steps/Steper";
import { useEffect, useState } from "react";
import { StepperContext, type SubmitStatusType } from "./steps/StepperContext";
import { mockSubmitSupportForm } from "../../../shared/mock";
import { useTranslation } from "react-i18next";

const DRAFT_KEY = "support-form-draft-v1";

const SupportForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>({
    error: null,
    success: null,
  });
  const { t } = useTranslation();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(UserForm),
    mode: "all",
    defaultValues: userFormDefaultValues,
  });

  const { handleSubmit, reset, watch } = form;

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (!saved) return;

    try {
      const { step, values } = JSON.parse(saved);
      reset(values);
      setActiveStep(step ?? 0);
    } catch {
      localStorage.removeItem(DRAFT_KEY);
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({
          step: activeStep,
          values,
        }),
      );
    });

    return () => subscription.unsubscribe();
  }, [watch, activeStep]);

  const onSubmit = async (data: UserFormValues) => {
    setIsSubmitting(true);

    try {
      await mockSubmitSupportForm(data);

      localStorage.removeItem(DRAFT_KEY);

      console.log("Form submitted successfully");
      setSubmitStatus((prev) => ({
        ...prev,
        success: t("formStatus.success"),
      }));
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus((prev) => ({
        ...prev,
        error: t("formStatus.failed"),
      }));
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({
          error: null,
          success: null,
        });
      }, 2000);
    }
  };

  const onError = () => {
    setSubmitStatus((prev) => ({
      ...prev,
      error: t("formStatus.missing"),
    }));

    setTimeout(() => {
      setSubmitStatus({
        error: null,
        success: null,
      });
    }, 2000);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormProvider {...form}>
        <StepperContext.Provider
          value={{
            activeStep,
            setActiveStep,
            isSubmitting,
            setSubmitStatus,
            submitStatus,
          }}
        >
          <Steper />
        </StepperContext.Provider>
      </FormProvider>
    </Stack>
  );
};

export default SupportForm;
