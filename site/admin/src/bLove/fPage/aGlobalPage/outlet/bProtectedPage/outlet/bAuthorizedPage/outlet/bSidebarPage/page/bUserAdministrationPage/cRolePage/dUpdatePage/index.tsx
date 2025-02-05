import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import roleAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/cRoleAPI";
import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";

import RoleUpdateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/cRoleComponent/dUpdateComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import formSchema from "./extra/cFormSchema";
import submitHandler from "./extra/bSubmitHandler";
import header from "./extra/fHeader";
import data from "./extra/gData";
import formDefaultValue from "./extra/dFormDefaultValue";
import previousValue from "./extra/ePreviousValue";


const RoleUpdatePage = () => {
  // Variable
  const { id } = useParams();
  const updateRetrieveAPIResponse = roleAPIEndpoint.useRoleUpdateRetrieveAPIQuery({ params: { _id: id } });
  const [ updateAPITrigger, updateAPIResponse ] = roleAPIEndpoint.useRoleUpdateAPIMutation();
  const menuListAPIResponse = menuAPIEndpoint.useMenuListForRoleCreateAndUpdateAPIQuery(null);

  // API Call
  const APICall = {
    retrieveAPIResponse: updateRetrieveAPIResponse,
    updateAPITrigger,
    updateAPIResponse,
    menuListAPIResponse,
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* RoleUpdatePage */}
      <RoleUpdateComponent 
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

export default RoleUpdatePage;
