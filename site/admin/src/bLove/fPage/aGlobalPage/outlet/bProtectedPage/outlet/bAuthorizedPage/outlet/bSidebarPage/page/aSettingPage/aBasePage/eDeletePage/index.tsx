import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/cBaseAPI";

import BaseDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";


const BaseDeletePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = baseAPIEndpoint.useBaseRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = baseAPIEndpoint.useBaseDeleteAPIMutation();

  // API Call
  const APICall = {
    retrieveAPIResponse,
    deleteAPITrigger,
    deleteAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* BaseDeletePage */}
      <BaseDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default BaseDeletePage;
