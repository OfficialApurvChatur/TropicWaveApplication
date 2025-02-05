import React from "react"
import { Link, useNavigate } from "react-router-dom";

import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import fullRoute from "@/bLove/gRoute/bFullRoute";

import { AppSidebar } from "./component/app-sidebar";

import { BookmarkX, FolderKey, KeyRound, LogIn, LogOut, MailIcon, Rat, User2, UserPen, UserPlus } from "lucide-react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/aConnection/bShadcnConnection/components/ui/sidebar";
import { Separator } from "@/aConnection/bShadcnConnection/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/aConnection/bShadcnConnection/components/ui/breadcrumb";
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";


const AuthorizedComponent = ({ children, ReduxCall, APICall, submitHandler }: { children: React.ReactNode, ReduxCall: any, APICall: any, submitHandler: any }) => {
  // Variable
  const navigate = useNavigate();

  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedComponent */}

      <SidebarProvider>
        <AppSidebar ReduxCall={ReduxCall} APICall={APICall} submitHandler={submitHandler} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            <div className="ml-auto px-3 flex gap-2">
              <ModeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {
                    (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={"asdsadsad"} />
                          <AvatarFallback>{getInitialsUtility(
                            ReduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                            ReduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                          )}</AvatarFallback>
                        </Avatar>
                        <div className='hidden sm:block' >
                          <div className="flex items-center flex-1 gap-1">
                            <p className="text-sm font-medium leading-none">{`
                              ${ReduxCall.state.receivedObject?.AccountRetrieve?.eFirstname} 
                              ${ReduxCall.state.receivedObject?.AccountRetrieve?.eLastname}
                            `}</p>
                            <p className="text-xs font-medium text-muted-foreground">
                              ({ReduxCall.state.receivedObject?.AccountRetrieve?.cRole?.aTitle})
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">{ReduxCall.state.receivedObject?.AccountRetrieve?.eEmail}</p>
                        </div>
                      </div>
                    ) : 
                    (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <User2 className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                      </Button>
                    ) : null
                  }
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {
                    (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.aAccountRetrieveRoute} >
                            <Rat /> View Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.bAccountUpdateRoute} >
                            <UserPen /> Edit Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.cAccountEmailUpdateRoute} >
                            <MailIcon /> Change Email
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.dAccountPasswordUpdateRoute} >
                            <FolderKey /> Change Password
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.aTopbarRoute.eAccountDeleteRoute} >
                            <BookmarkX /> Delete Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <span onClick={() => submitHandler(ReduxCall, APICall, navigate)} >
                            <LogOut /> Sign Out
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    ) : 
                    (ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute} >
                            <LogIn /> Sign In
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.bSignUpRoute} >
                            <UserPlus /> Sign Up
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild >
                          <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.cForgotPasswordRoute} >
                          <KeyRound /> Forgot Password
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    ) : null
                  }
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </header>
          {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div> */}
          { children }
        </SidebarInset>
      </SidebarProvider>

    </React.Fragment>
  )
}

export default AuthorizedComponent;
