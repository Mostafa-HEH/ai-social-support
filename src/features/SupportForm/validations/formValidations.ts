import z from "zod";

export const UserForm = z.object({
  //! Step 1
  name: z.string().min(3, "form.fullName.errors.min"),
  national_id: z
    .string()
    .min(6, "form.nationalId.errors.min")
    .max(20, "form.nationalId.errors.max"),
  date_of_birth: z.string().min(1, "form.dateOfBirth.errors.required"),
  gender: z.string().min(1, "form.gender.errors.required"),
  country: z.any().refine(Boolean, {
    message: "form.country.errors.required",
  }),
  state: z.string().min(2, "form.state.errors.min"),
  city: z.string().min(2, "form.city.errors.min"),
  address: z.string().min(10, "form.address.errors.min"),
  phone: z.string().regex(/^[0-9+()\s-]+$/, "form.phone.errors.invalid"),
  email: z.string().email("form.email.errors.invalid"),

  //! Step 2
  marital_status: z.string().min(1, "form.maritalStatus.errors.required"),
  dependents: z.string({
    error: "form.dependents.errors.required",
  }),
  employment_status: z.string().min(1, "form.employmentStatus.errors.required"),
  monthly_income: z.string({
    error: "form.monthlyIncome.errors.required",
  }),
  housing_status: z.string().min(1, "form.housingStatus.errors.required"),

  //! Step 3
  current_financial_situation: z
    .string()
    .trim()
    .min(30, "form.currentFinancialSituation.errors.min")
    .max(1000, "form.common.errors.max"),
  employment_circumstances: z
    .string()
    .trim()
    .min(30, "form.employmentCircumstances.errors.min")
    .max(1000, "form.common.errors.max"),
  reason_for_applying: z
    .string()
    .trim()
    .min(20, "form.reasonForApplying.errors.min")
    .max(1000, "form.common.errors.max"),
});

export type UserFormValues = z.infer<typeof UserForm>;

export const userFormDefaultValues: UserFormValues = {
  // ! Step 1
  name: "",
  national_id: "",
  date_of_birth: "",
  gender: "",
  country: null,
  state: "",
  city: "",
  address: "",
  phone: "",
  email: "",

  // ! Step 2
  marital_status: "",
  dependents: "",
  employment_status: "",
  monthly_income: "",
  housing_status: "",

  // ! Step 3
  current_financial_situation: "",
  employment_circumstances: "",
  reason_for_applying: "",
};
