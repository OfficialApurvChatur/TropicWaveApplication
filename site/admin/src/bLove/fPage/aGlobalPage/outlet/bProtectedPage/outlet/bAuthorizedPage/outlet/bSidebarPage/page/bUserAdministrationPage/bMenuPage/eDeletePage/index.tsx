import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import menuAPIEndpoint from "@/bLove/aAPI/aGlobalAPI/bProtectedAPI/bAuthorizedAPI/bSidebarAPI/bUserAdministrationAPI/bMenuAPI";

import MenuDeleteComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/bUserAdministrationComponent/bMenuComponent/eDeleteComponent";

import apiResponseHandler from "./extra/aAPIResponseHandler";
import header from "./extra/cHeader";
import data from "./extra/dData";
import submitHandler from "./extra/bSubmitHandler";


const MenuDeletePage = () => {
  // Variable
  const { id } = useParams();
  const retrieveAPIResponse = menuAPIEndpoint.useMenuRetrieveAPIQuery({ params: { _id: id } });
  const [ deleteAPITrigger, deleteAPIResponse ] = menuAPIEndpoint.useMenuDeleteAPIMutation();

  // API Call
  const APICall = {
    retrieveAPIResponse,
    deleteAPITrigger,
    deleteAPIResponse
  }

  // All Render
  // 1. Success Render
  useEffect(() => {
    apiResponseHandler.retrieveAPIResponseHandler(APICall.retrieveAPIResponse)
  }, [APICall.retrieveAPIResponse])
  
  // JSX
  return (
    <React.Fragment>
      {/* MenuDeletePage */}
      <MenuDeleteComponent
        header={header()} 
        data={data({ retrieveAPIResponse: APICall.retrieveAPIResponse })} 
        params={{ id: id }}
        APICall={APICall} 
        submitHandler={submitHandler} 
      />
    </React.Fragment>
  )
}

export default MenuDeletePage;
