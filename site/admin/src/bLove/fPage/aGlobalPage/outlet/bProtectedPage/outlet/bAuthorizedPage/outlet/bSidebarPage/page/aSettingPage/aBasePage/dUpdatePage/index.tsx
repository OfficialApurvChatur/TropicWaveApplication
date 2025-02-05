import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/cBaseAPI";

import BaseUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";


const BaseUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = baseAPIEndpoint.useBaseRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = baseAPIEndpoint.useBaseUpdateAPIMutation();

  // API Call
  const APICall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseUpdatePage */}
      <BaseUpdateComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue}
        params={{ id: id }}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default BaseUpdatePage;
