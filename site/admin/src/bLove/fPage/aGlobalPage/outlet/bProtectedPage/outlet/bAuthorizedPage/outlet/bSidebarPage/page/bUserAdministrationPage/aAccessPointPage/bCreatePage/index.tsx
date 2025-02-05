import React from "react";

import accessPointAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/aAccessPointAPI";

import AccessPointCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/aAccessPointComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const AccessPointCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = accessPointAPIEndpoint.useAccessPointCreateAPIMutation();
  
  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* AccessPointCreatePage */}
      <AccessPointCreateComponent 
        header={header()} 
        data={data()} 
        formSchema={formSchema} 
        formDefaultValue={formDefaultValue}
        APICall={APICall}
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default AccessPointCreatePage;
