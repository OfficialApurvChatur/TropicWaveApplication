import { useState } from "react";
import { Link } from "react-router-dom";

import { BookmarkX, FolderKey, KeyRound, LogIn, MailIcon, Menu, Rat, User2, UserPen, UserPlus } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/aConnection/bShadcnConnection/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/aConnection/bShadcnConnection/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/aConnection/bShadcnConnection/components/ui/avatar";
import { ModeToggle } from "@/aConnection/bShadcnConnection/components/mode-toggle";
import { Button, buttonVariants } from "@/aConnection/bShadcnConnection/components/ui/button";

import { LogoIcon } from "@/bLove/hAsset/Icons";
import getInitialsUtility from "@/bLove/dUtility/aGetInitialsUtility";
import fullRoute from "@/bLove/gRoute/bFullRoute";


interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

type NavbarComponentType = {
  ReduxCall: any
}

export const NavbarComponent = (props: NavbarComponentType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <LogoIcon />
              TropicWave Application
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>

            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {
                  (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={"asdsadsad"} />
                        <AvatarFallback>{getInitialsUtility(
                          props.ReduxCall.state.receivedObject?.AccountRetrieve?.eFirstname, 
                          props.ReduxCall.state.receivedObject?.AccountRetrieve?.eLastname
                        )}</AvatarFallback>
                      </Avatar>
                      <div className='hidden sm:block' >
                        <div className="flex items-center flex-1 gap-1">
                          <p className="text-sm font-medium leading-none">{`
                            ${props.ReduxCall.state.receivedObject?.AccountRetrieve?.eFirstname} 
                            ${props.ReduxCall.state.receivedObject?.AccountRetrieve?.eLastname}
                          `}</p>
                          <p className="text-xs font-medium text-muted-foreground">
                            ({props.ReduxCall.state.receivedObject?.AccountRetrieve?.cRole?.aTitle})
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">{props.ReduxCall.state.receivedObject?.AccountRetrieve?.eEmail}</p>
                      </div>
                    </div>
                  ) : 
                  (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <User2 className="h-5 w-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  ) : null
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {
                  (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
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
                      {/* <DropdownMenuItem asChild >
                        <span onClick={() => submitHandler(ReduxCall, APICall, navigate)} >
                          <LogOut /> Sign Out
                        </span>
                      </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                  ) : 
                  (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
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
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
