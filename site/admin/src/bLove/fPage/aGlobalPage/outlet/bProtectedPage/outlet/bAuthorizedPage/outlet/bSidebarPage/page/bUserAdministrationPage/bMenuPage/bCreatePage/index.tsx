import React from "react";

import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";
import accessPointAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/aAccessPointAPI";

import MenuCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bMenuComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const MenuCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = menuAPIEndpoint.useMenuCreateAPIMutation();
  const accessPointListAPIResponse = accessPointAPIEndpoint.useAccessPointListForMenuCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
    accessPointListAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* MenuCreatePage */}
      <MenuCreateComponent 
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

export default MenuCreatePage;
