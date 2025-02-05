import React from "react";

import baseAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/aSettingAPI/cBaseAPI";

import BaseCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/bCreateComponent";

import header from "./extra/eHeader";
import data from "./extra/fData";
import formSchema from "./extra/cFormSchema";
import formDefaultValue from "./extra/dFormDefaultValue";
import submitHandler from "./extra/bSubmitHandler";


const BaseCreatePage = () => {
  // Variable
  const [ createAPITrigger, createAPIResponse ] = baseAPIEndpoint.useBaseCreateAPIMutation();
  
  // API Call
  const APICall = {
    createAPITrigger,
    createAPIResponse,
  }

  // JSX
  return (
    <React.Fragment>
      {/* BaseCreatePage */}
      <BaseCreateComponent 
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

export default BaseCreatePage;
