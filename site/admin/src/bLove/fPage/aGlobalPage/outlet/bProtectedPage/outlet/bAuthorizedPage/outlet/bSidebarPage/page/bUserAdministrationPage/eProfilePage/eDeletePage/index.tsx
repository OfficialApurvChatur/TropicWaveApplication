import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/eProfileAPI";

import ProfileDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/eProfileComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";


const ProfileDeletePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = profileAPIEndpoint.useProfileRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = profileAPIEndpoint.useProfileDeleteAPIMutation();

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
      {/* ProfileDeletePage */}
      <ProfileDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default ProfileDeletePage;
