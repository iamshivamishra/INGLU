import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),

  conatct: z
    .string()
    .trim()
    .min(1, "Contact is required")
    .regex(/^\d{10}$/, "Enter a valid 10-digit number"),

  email: z.email("Invalid email address"),

  reason: z.string().min(1, "Please select a reason"),

  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
