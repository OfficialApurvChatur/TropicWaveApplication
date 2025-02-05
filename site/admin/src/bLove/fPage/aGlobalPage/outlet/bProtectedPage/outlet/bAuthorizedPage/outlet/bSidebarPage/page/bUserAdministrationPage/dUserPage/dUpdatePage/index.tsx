import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAPI";
import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";
import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/eProfileAPI";

import UserUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/dUserComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";


const UserUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = userAPIEndpoint.useUserRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = userAPIEndpoint.useUserUpdateAPIMutation();
  const roleListAPIResponse = roleAPIEndpoint.useRoleListForUserCreateAndUpdateAPIQuery(null);
  const profileListAPIResponse = profileAPIEndpoint.useProfileListForUserCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse,
    roleListAPIResponse,
    profileListAPIResponse,
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* UserUpdatePage */}
      <UserUpdateComponent 
        header={header({ id: (id as string), retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse, APICall: APICall })} 
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

export default UserUpdatePage;
