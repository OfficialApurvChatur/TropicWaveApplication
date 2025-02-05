import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";

import RoleDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cRoleComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";


const RoleDeletePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = roleAPIEndpoint.useRoleRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = roleAPIEndpoint.useRoleDeleteAPIMutation();

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
      {/* RoleDeletePage */}
      <RoleDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default RoleDeletePage;
