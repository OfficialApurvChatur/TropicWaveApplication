import { NavigateFunction } from "react-router-dom";

import apiResponseHandler from "./aAPIResponseHandler";


const submitHandler = (ReduxCall: any, APICall: any, navigate: NavigateFunction) => {
  apiResponseHandler.submitAPIResponseHandler(ReduxCall, APICall.submitAPITrigger, navigate)
}

export default submitHandler;
