import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/eProfileAPI";
import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAPI";

import ProfileUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/eProfileComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";


const ProfileUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = profileAPIEndpoint.useProfileRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = profileAPIEndpoint.useProfileUpdateAPIMutation();
  const userListAPIResponse = userAPIEndpoint.useUserListForProfileCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    retrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse,
    userListAPIResponse,
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* ProfileUpdatePage */}
      <ProfileUpdateComponent 
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

export default ProfileUpdatePage;
