import { z } from "zod";


const formSchema = z.object({
  aImage: z.string()
    .min(3, { message: "Please select image" }),
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  cMenu: z.array(z.object({
    menu: z.string(),
    access: z.array(z.object({
      accessPoint: z.string(),
      hasAccess: z.boolean()
    }))
  }))
});

export default formSchema;
