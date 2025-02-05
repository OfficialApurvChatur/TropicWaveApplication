import { z } from "zod";


const formSchema = z.object({
  aImage: z.string()
    .min(3, { message: "Please select image" }),
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  cRole: z.string()
    .nonempty("Please select role"),
  cProfile: z.string()
    .nonempty("Please select profile"),

  eFirstname: z.string()
    .min(3, { message: "First name must be at least 3 characters long" })
    .max(50, { message: "First name must not exceed 50 characters" }),
  eLastname: z.string()
    .min(3, { message: "Last name must be at least 3 characters long" })
    .max(50, { message: "Last name must not exceed 50 characters" }),
  eMobile: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid phone number" })
    .max(15, { message: "Mobile number must not exceed 15 digits" }),
});

export default formSchema;
