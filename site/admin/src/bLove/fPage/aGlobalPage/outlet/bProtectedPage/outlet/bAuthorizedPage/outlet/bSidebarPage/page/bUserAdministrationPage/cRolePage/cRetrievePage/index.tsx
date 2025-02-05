import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";

import RoleRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cRoleComponent/cRetrieveComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import data from "./extra/cData";
import header from "./extra/bHeader";


const RoleRetrievePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = roleAPIEndpoint.useRoleRetrieveAPIQuery({ params: { _id: id } });

  // API Call
  const APICall = {
    retrieveAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* RoleRetrievePage */}
      <RoleRetrieveComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
      />
    </React.Fragment>
  )
}

export default RoleRetrievePage;
