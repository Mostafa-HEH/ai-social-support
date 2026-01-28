import z from "zod";

export const UserForm = z.object({
  //! Step 1
  name: z.string().trim().min(3, "Full name must be at least 3 characters"),
  national_id: z
    .string()
    .trim()
    .min(6, "National ID is too short")
    .max(20, "National ID is too long"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  country: z.any().refine((val) => !!val, {
    message: "Country is required",
  }),
  state: z.string().trim().min(2, "State / Province is required"),
  city: z.string().trim().min(2, "City is required"),
  address: z.string().trim().min(10, "Address must be at least 10 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+()\s-]+$/, "Invalid phone number"),
  email: z.string().trim().email("Invalid email address"),

  //! Step 2
  marital_status: z.string().min(1, "Marital status is required"),
  dependents: z.string({
    error: "Number of dependents is required",
  }),
  employment_status: z.string().min(1, "Employment status is required"),
  monthly_income: z.string({
    error: "Monthly income is required",
  }),
  housing_status: z.string().min(1, "Housing status is required"),

  //! Step 3
  current_financial_situation: z
    .string()
    .trim()
    .min(30, "Please provide more details about your financial situation")
    .max(1000, "Description is too long"),
  employment_circumstances: z
    .string()
    .trim()
    .min(30, "Please provide more details about your employment circumstances")
    .max(1000, "Description is too long"),
  reason_for_applying: z
    .string()
    .trim()
    .min(20, "Please explain your reason for applying")
    .max(1000, "Description is too long"),
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
