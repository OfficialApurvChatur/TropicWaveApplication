import React, { useEffect } from "react"

import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAccountAPI";

import AccountRetrieveComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/aAccountRetrieveComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";


const AccountRetrievePage = () => {
  // Variable
  const retrieveAPIResponse = userAccountAPIEndpoint.useUserAccountRetrieveAPIQuery(null);
  
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
      {/* AccountRetrievePage */}
      <AccountRetrieveComponent 
        APICall={APICall} 
      />
    </React.Fragment>
  )
}

export default AccountRetrievePage;
