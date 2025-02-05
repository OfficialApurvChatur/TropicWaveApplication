import React, { useEffect } from "react";
import { z } from "zod";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";

import RoleListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cRoleComponent/aListComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import listSchema from "./extra/bSchema";
import columns from "./extra/dColumns";


const RoleListPage = () => {
  // Variable
  const listAPIResponse = roleAPIEndpoint.useRoleListAPIQuery(null);

  // API Call
  const APICall = {
    listAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.listAPIResponseHandler(APICall.listAPIResponse)
  }, [APICall.listAPIResponse])

  // JSX
  return (
    <React.Fragment>
      {/* RoleListPage */}
      <RoleListComponent 
        header={header({ listAPIResponse: APICall.listAPIResponse })} 
        data={z.array(listSchema).parse(APICall.listAPIResponse?.data?.list || [])} 
        columns={columns} 
        APICall={APICall}
      />
    </React.Fragment>
  )
}

export default RoleListPage;
