import { z } from "zod";
import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";
import formSchema from "./cFormSchema";


const submitHandler = (data: z.infer<typeof formSchema>, form: any, ReduxCall: any, APICall: any, navigate: NavigateFunction) => {
  apiResponseHandler.updateAPIResponseHandler(data, ReduxCall, APICall.updateAPITrigger, form, navigate, APICall.userAccountRetrieveAPITrigger)
}

export default submitHandler;
