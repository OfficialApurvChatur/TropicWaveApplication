import { z } from "zod"


const listSchema = z.object({
  _id: z.string(),
  aImage: z.string().optional(),
  aTitle: z.string(),
})

export default listSchema;
export type ListSchema = z.infer<typeof listSchema>
