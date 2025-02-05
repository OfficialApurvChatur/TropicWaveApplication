import { NavigateFunction } from "react-router-dom";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const apiResponseHandler = {
  retrieveAPIResponseHandler: (retrieveAPIResponse: any) => {
    // Handle loading
    if (retrieveAPIResponse.isLoading || retrieveAPIResponse.isFetching) return;

    // Handle error
    if (retrieveAPIResponse.isError) {
      if (retrieveAPIResponse.error && retrieveAPIResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        });
      } else if (retrieveAPIResponse.error && retrieveAPIResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: retrieveAPIResponse.error?.data.message || "There was an error.",
        });
      } else {
        return toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred.",
        });
      }
      return;
    }

    // Handle success
    if (retrieveAPIResponse.isSuccess && retrieveAPIResponse.data?.success) {
      return toast({
        variant: "default",
        title: "Yayy! Congratulations...",
        description: retrieveAPIResponse.data.message || "Something loaded successfully.",
      });
    }

  },

  deleteAPIResponseHandler: async (deleteAPITrigger: any, navigate: NavigateFunction, params: any) => {
    try {
      const serverResponse = await deleteAPITrigger({ 
        params: { _id: params.id },
      });

      // console.log(serverResponse)

      if (serverResponse.error && serverResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        })  
      } 
      
      if (serverResponse.error && serverResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: serverResponse.error.data.message || "There was an error occured.",
        })  
      }

      if (serverResponse.data && serverResponse.data?.success === true) {
        toast({
          variant: "default",
          title: "Yayy! Congratulations...",
          description: serverResponse.data.message,
        })

        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.aListRoute)
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }
  }

}

export default apiResponseHandler;
