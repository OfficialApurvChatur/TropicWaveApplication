import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAPI";

import UserDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/dUserComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";


const UserDeletePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = userAPIEndpoint.useUserRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = userAPIEndpoint.useUserDeleteAPIMutation();

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
      {/* UserDeletePage */}
      <UserDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default UserDeletePage;
