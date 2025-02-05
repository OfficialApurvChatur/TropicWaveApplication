import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import formSchema from "./cFormSchema";


const apiResponseHandler = {
  createAPIResponseHandler: async (data: z.infer<typeof formSchema>, createAPITrigger: any, form: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await createAPITrigger({ body: {
        aImage: data.aImage,
        aTitle: data.aTitle,
      } });

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
        form.reset();

        return navigate(fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.aListRoute)
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
