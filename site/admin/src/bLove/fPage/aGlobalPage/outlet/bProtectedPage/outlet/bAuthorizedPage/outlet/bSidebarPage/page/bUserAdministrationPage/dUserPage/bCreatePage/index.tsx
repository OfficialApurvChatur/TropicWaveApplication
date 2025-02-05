import React from "react";

import userAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/dUserAPI";
import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";

import UserCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/dUserComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const UserCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = userAPIEndpoint.useUserCreateAPIMutation();
  const roleListAPIResponse = roleAPIEndpoint.useRoleListForUserCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
    roleListAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* UserCreatePage */}
      <UserCreateComponent 
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

export default UserCreatePage;
