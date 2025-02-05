import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAccountAPI";

import AccountUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/aTopbarComponent/children/bAccountUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";
import previousValue from "./extra/ePreviousValue";


const AccountUpdatePage = () => {
  // Variable
  const retrieveAPIResponse = userAccountAPIEndpoint.useUserAccountRetrieveAPIQuery(null);
  const [ updateAPITrigger, updateAPIResponse ] = userAccountAPIEndpoint.useUserAccountUpdateAPIMutation();
  const [ userAccountRetrieveAPITrigger, userAccountRetrieveAPIResponse ] = userAccountAPIEndpoint.useLazyUserAccountRetrieveAPIQuery();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse,
    userAccountRetrieveAPITrigger,
    userAccountRetrieveAPIResponse,
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* AccountUpdatePage */}
      <AccountUpdateComponent
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        previousValue={previousValue}
        ReduxCall={ReduxCall}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AccountUpdatePage;
