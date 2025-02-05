import { Button, buttonVariants } from "@/aConnection/bShadcnConnection/components/ui/button";
import { HeroCardComponent } from "./aHeroCardComponent";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import fullRoute from "@/bLove/gRoute/bFullRoute";

type HeroComponentType = {
  ReduxCall: any
}

export const HeroComponent = (props: HeroComponentType) => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          {
            (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Verified" && props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
              <Button className="w-full md:w-1/3" asChild >
                <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.cMainRoute.aDashboardRoute} >
                  Get Started
                </Link>
              </Button>
            ) :
            (props.ReduxCall.state.receivedObject?.AccountRetrieve?.eAccountStatus === "Not Verified" && !props.ReduxCall.state.receivedObject?.AccountRetrieve?._id) ? (
              <Button className="w-full md:w-1/3" asChild >
                <Link to={fullRoute.aGlobalRoute.bProtectedRoute.aAutheticatedRoute.aSignInRoute} >
                  Sign In
                </Link>
              </Button>            
            ) : null
          }

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCardComponent />
      </div>

      {/* Shadow effect */}
      <div className="shadow-new"></div>
    </section>
  );
};
