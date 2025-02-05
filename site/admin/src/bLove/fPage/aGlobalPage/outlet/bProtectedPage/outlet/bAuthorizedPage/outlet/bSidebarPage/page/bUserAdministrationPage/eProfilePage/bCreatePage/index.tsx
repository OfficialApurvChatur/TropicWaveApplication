import React from "react";

import profileAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/eProfileAPI";
import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAPI";

import ProfileCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/eProfileComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const ProfileCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = profileAPIEndpoint.useProfileCreateAPIMutation();
  const userListAPIResponse = userAPIEndpoint.useUserListForProfileCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
    userListAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* ProfileCreatePage */}
      <ProfileCreateComponent 
        header={header()} 
        data={data({ APICall: APICall })} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default ProfileCreatePage;
