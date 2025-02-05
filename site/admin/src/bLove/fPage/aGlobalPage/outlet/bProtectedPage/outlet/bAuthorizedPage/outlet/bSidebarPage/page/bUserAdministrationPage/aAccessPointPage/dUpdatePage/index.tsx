import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import accessPointAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/aAccessPointAPI";

import AccessPointUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aAccessPointComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";


const AccessPointUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = accessPointAPIEndpoint.useAccessPointRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = accessPointAPIEndpoint.useAccessPointUpdateAPIMutation();

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
      {/* AccessPointUpdatePage */}
      <AccessPointUpdateComponent 
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

export default AccessPointUpdatePage;
