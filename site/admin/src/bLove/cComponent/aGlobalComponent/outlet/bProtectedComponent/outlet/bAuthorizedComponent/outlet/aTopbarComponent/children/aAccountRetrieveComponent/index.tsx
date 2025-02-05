import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/aConnection/bShadcnConnection/components/ui/card'

import backgroundImage from "@/bLove/hAsset/defaultImage.png";
import { Badge } from '@/aConnection/bShadcnConnection/components/ui/badge';


type AccountRetrieveComponentType = {
  APICall: any
}

const AccountRetrieveComponent = (props: AccountRetrieveComponentType) => {

  const cMenu = props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.cRole?.cMenu
    ?.filter((each: any) => each.menu)
    ?.map((each: any) => {
      let itsMenu;
      let itsAccess: any[] = []; 

      // Check if each.menu._id exists, then assign
      if (each.menu._id) itsMenu = each.menu;

      // Map over cAccessPoint to build access points
      itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
        // Find the matching access point from previousAccess
        const access = each.access.find((access: any) => access.accessPoint === eachPoint._id);
        
        return {
          accessPoint: eachPoint,
          hasAccess: access ? access.hasAccess : false // Use default false if no match
        };
      });

      // Return the menu and its updated access
      return {
        menu: itsMenu,
        access: itsAccess
      };
    }) 
  
  // JSX
  return (
    <React.Fragment>
      {/* AccountRetrieveComponent */}

      <div className="space-y-8">
        {
          (props.APICall.retrieveAPIResponse.isLoading || props.APICall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
          (props.APICall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
          (props.APICall.retrieveAPIResponse.isSuccess) ? (
            (props.APICall.retrieveAPIResponse.data.success) ? (
              <React.Fragment>
                
                {/* Critical Info */}
                <Card className="overflow-hidden" >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Critical Information
                      </CardTitle>
                      <CardDescription>This section contains critical information like first name, last name, email etc.</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-4">

                      {/* First Name */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >First Name :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.eFirstname}</span>
                      </div>

                      {/* Last Name */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >Last Name :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.eLastname}</span>
                      </div>

                      {/* Email */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >Email :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.eEmail}</span>
                      </div>

                      {/* Mobile */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >Mobile :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.eMobile}</span>
                      </div>

                    </div>
                  </CardContent>
                </Card>
                
                {/* Basic Info */}
                <Card className="overflow-hidden" >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Basic Information
                      </CardTitle>
                      <CardDescription>This section contains basic information like title, subtitle, etc.</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-4">

                      {/* Image */}
                      <div className="grid text-sm gap-1" >
                        <span className="font-medium" >Image :</span>
                        <div className="rounded-md flex items-center justify-center w-28 h-28 overflow-hidden">
                          <img
                            src={props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.aImage || backgroundImage}
                            className="rounded-md object-cover w-full h-full"
                            alt="Uploaded Preview"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >Title :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.aTitle}</span>
                      </div>

                      {/* Slug */}
                      <div className="grid text-sm gap-0.5" >
                        <span className="font-medium" >Slug :</span>
                        <span>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.aSlug}</span>
                      </div>

                    </div>
                  </CardContent>
                </Card>
                                
                {/* Relation Info */}
                <Card className="overflow-hidden" >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Relation Information
                      </CardTitle>
                      <CardDescription>This section contains relation information like role, profile, etc.</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6 pt-4">

                      {/* Role */}
                      <div className="grid text-sm gap-1">
                        <span className="font-medium" >Role :</span>
                        <span><Badge>{props.APICall.retrieveAPIResponse.data?.user_account_retrieve?.cRole?.aTitle}</Badge></span>
                      </div>

                      {/* Permission */}
                      <div className="grid text-sm gap-0.5">
                        <span className="font-medium" >Permission :</span>
                        {cMenu?.map((eachValue: any, indexValue: number) => (eachValue.menu &&
                          <div className="flex flex-col items-start space-y-2 mt-2 ml-4" key={indexValue}>
                            <h3 className="text-sm">{eachValue.menu.aTitle}</h3>

                            <ul className="grid grid-cols-5 gap-2 pb-4" >
                              {eachValue?.access?.map((eachAccessPoint: any, indexAccessPoint: number) => (
                                <li key={indexAccessPoint} className="flex flex-row items-center space-x-3 space-y-0 ml-4 px-2">
                                  <div className="flex justify-center items-center gap-2" >
                                    <span
                                      className={`${
                                        eachAccessPoint?.hasAccess ? "text-green-500" : "text-red-500"
                                      }`}
                                    >
                                      {eachAccessPoint.hasAccess
                                        ? <CheckCircle2 className="h-6 w-6" /> : <CrossCircledIcon className="h-6 w-6" />}
                                    </span>
                                    <span className="text-sm font-normal" >{eachAccessPoint?.accessPoint?.aTitle}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                    </div>
                  </CardContent>
                </Card>
                
                {/* Personal Info */}
                <Card className="overflow-hidden" >
                  <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg">
                        Personal Information
                      </CardTitle>
                      <CardDescription>This section contains personal information like created by, created at, etc.</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 pt-4">

                    </div>
                  </CardContent>
                </Card>

              </React.Fragment>
            ) : []
          ) : []
        }
      </div>

    </React.Fragment>
  )
}

export default AccountRetrieveComponent;
