import type { UserFormValues } from "../validations/formValidations";

export const buildFinancialSituationPrompt = (values: UserFormValues) => {
  const {
    employment_status,
    monthly_income,
    dependents,
    marital_status,
    housing_status,
    city,
  } = values;

  return `
Write a short, clear paragraph in first person describing my current financial situation.

I am ${employment_status || "not working"}.
My monthly income is ${monthly_income || "very limited"}.
I have ${dependents || "no"} dependents.
I am ${marital_status || "single"}.
I live in ${housing_status || "temporary housing"} in ${city || "my city"}.

The tone should be natural and honest, as if I am explaining my situation in my own words.
  `.trim();
};

export const buildEmploymentCircumstancesPrompt = (values: UserFormValues) => {
  const { employment_status, monthly_income, city } = values;

  return `
Write a short, clear paragraph in first person describing my employment circumstances.

I am currently ${employment_status || "not employed"}.
My current income situation is ${monthly_income || "unstable or limited"}.
I live and look for work in ${city || "my area"}.

Explain my work situation honestly, including whether my employment is stable, temporary, irregular, or affected by personal or economic circumstances.
Write it naturally, as if I am describing my situation in my own words.
  `.trim();
};

export const buildReasonForApplyingPrompt = (values: UserFormValues) => {
  const { employment_status, monthly_income, dependents, housing_status } =
    values;

  return `
Write a short, clear paragraph in first person explaining why I am applying for support.

Based on my current situation, I am ${employment_status || "not working"} and my income is ${
    monthly_income || "very limited"
  }.
I have ${dependents || "no"} dependents and I currently live in ${
    housing_status || "unstable housing"
  }.

Explain why I need support at this time and how it would help me improve my situation.
Write it honestly and naturally, as if I am explaining my reason in my own words.
  `.trim();
};
