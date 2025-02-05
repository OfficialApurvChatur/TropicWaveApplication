import { z } from "zod";


const formSchema = z.object({
  aImage: z.string()
    .min(3, { message: "Please select image" }),
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  cRole: z.string()
    .nonempty("Please select role"),

  eFirstname: z.string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name must not exceed 50 characters" }),
  eLastname: z.string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name must not exceed 50 characters" }),
  eEmail: z.string()
    .email({ message: "Please enter a valid email address" })
    .max(50, { message: "Email must not exceed 50 characters" }),
  eMobile: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" })
    .max(15, { message: "Mobile number must not exceed 15 digits" }),
  ePassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must not exceed 50 characters" }),
  eConfirmPassword: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must not exceed 50 characters" }),
})
.refine((data) => data.ePassword === data.eConfirmPassword, {
  message: "Passwords do not match",
  path: ["eConfirmPassword"],
});

export default formSchema;
