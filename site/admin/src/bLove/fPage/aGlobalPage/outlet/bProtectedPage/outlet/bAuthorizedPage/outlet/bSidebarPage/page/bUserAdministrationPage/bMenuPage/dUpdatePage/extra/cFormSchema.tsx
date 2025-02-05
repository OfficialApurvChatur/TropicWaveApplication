import { z } from "zod";


const formSchema = z.object({
  aImage: z.string()
    .min(3, { message: "Please select image" }),
  aTitle: z.string()
    .min(3, { message: "Please enter atlest 3 characters" })
    .max(50, { message: "Please enter atmost 50 characters" }),

  cAccessPoint: z.array(z.string())
    .nonempty("Please select atleast 1 access point.")
});

export default formSchema;
