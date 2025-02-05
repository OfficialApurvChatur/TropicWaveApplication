import React from "react";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";
import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";

import RoleCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cRoleComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const RoleCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = roleAPIEndpoint.useRoleCreateAPIMutation();
  const menuListAPIResponse = menuAPIEndpoint.useMenuListForRoleCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
    menuListAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* RoleCreatePage */}
      <RoleCreateComponent 
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

export default RoleCreatePage;
