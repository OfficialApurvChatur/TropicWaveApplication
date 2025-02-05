import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/aConnection/dReduxConnection";

import globalSlice from "@/bLove/bRedux/aGlobalSlice";

import userAuthAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAuthAPI";
import userAccountAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAccountAPI";

import SignInComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent/children/aSignInComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const SignInPage = () => {
  // Variable
  const [ signInAPITrigger, signInAPIResponse ] = userAuthAPIEndpoint.useUserAuthSignInAPIMutation();
  const [ userAccountRetrieveAPITrigger, userAccountRetrieveAPIResponse ] = userAccountAPIEndpoint.useLazyUserAccountRetrieveAPIQuery();

  // Redux Call
  const ReduxCall = {
    state: useSelector((state: RootState) => state.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // API Call
  const APICall = {
    submitAPITrigger: signInAPITrigger,
    submitAPIResponse: signInAPIResponse,
    userAccountRetrieveAPITrigger,
    userAccountRetrieveAPIResponse,
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* SignInPage */}
      <SignInComponent
        header={header()} 
        data={data()} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        ReduxCall={ReduxCall}
        APICall={APICall}
        submitHandler={submitHandler}         
      />
    </React.Fragment>
  )
}

export default SignInPage;
