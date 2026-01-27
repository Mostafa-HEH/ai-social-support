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
});

export type UserFormValues = z.infer<typeof UserForm>;
