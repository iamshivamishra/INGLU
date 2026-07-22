import { z } from "zod";

export const queriesFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z.email("Invalid email address"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});
export type queriesFormSchema = z.infer<typeof queriesFormSchema>;
