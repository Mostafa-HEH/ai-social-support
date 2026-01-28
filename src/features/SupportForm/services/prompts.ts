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
