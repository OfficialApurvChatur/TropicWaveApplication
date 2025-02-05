import { NavigateFunction } from "react-router-dom";
import { z } from "zod";

import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";

import fullRoute from "@/bLove/gRoute/bFullRoute";
import formSchema from "./cFormSchema";


const apiResponseHandler = {
  submitAPIResponseHandler: async (data: z.infer<typeof formSchema>, ReduxCall: any, submitAPITrigger: any, form: any, navigate: NavigateFunction, roleListAPIResponse: any, userAccountRetrieveAPITrigger: any) => {
    try {
      const serverResponse = await submitAPITrigger({ body: {
        aTitle: `${data.eEmail} (${data.eFirstname} ${data.eLastname})`,
        
        cRole: roleListAPIResponse?.data?.list?._id,

        eFirstname: data.eFirstname,
        eLastname: data.eLastname,
        eEmail: data.eEmail,
        eMobile: data.eMobile,
        ePassword: data.ePassword,
        eConfirmPassword: data.eConfirmPassword,
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

        await apiResponseHandler.userAccountRetrieveAPIResponseHandler(userAccountRetrieveAPITrigger, ReduxCall, navigate)
      }

      return;

    } catch (error: any) {
      return toast({
        variant: "destructive",
        title: "Uh oh! Bad code... Bad code.",
        description: "There was a problem with try block code",
      })
    }
  },

  userAccountRetrieveAPIResponseHandler: async (userAccountRetrieveAPITrigger: any, ReduxCall: any, navigate: NavigateFunction) => {
    try {
      const serverResponse = await userAccountRetrieveAPITrigger();

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
        // form.reset();

        ReduxCall.dispatch(
          ReduxCall.action.receivedObjectAction({
            AccountRetrieve: {
              ...serverResponse.data.user_account_retrieve,
              eAccountStatus: "Verified"
            }
          })
        )
  
        return navigate(fullRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute)
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
