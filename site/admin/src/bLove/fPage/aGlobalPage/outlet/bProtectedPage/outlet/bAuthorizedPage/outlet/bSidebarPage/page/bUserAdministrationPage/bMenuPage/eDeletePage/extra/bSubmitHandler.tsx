import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";


const submitHandler = (APICall: any, navigate: NavigateFunction, params: any) => {
  apiResponseHandler.deleteAPIResponseHandler(APICall.deleteAPITrigger, navigate, params)
}

export default submitHandler;
