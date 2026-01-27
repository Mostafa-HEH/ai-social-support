import z from "zod";

export const UserForm = z.object({});
export type UserFormValues = z.infer<typeof UserForm>;
