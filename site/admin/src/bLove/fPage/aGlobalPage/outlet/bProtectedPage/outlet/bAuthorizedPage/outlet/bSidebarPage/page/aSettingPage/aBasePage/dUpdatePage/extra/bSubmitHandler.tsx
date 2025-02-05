import { z } from "zod";
import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";
import formSchema from "./cFormSchema";


const submitHandler = (data: z.infer<typeof formSchema>, form: any, APICall: any, navigate: NavigateFunction, params: any) => {
  apiResponseHandler.updateAPIResponseHandler(data, APICall.updateAPITrigger, form, navigate, params)
}

export default submitHandler;
