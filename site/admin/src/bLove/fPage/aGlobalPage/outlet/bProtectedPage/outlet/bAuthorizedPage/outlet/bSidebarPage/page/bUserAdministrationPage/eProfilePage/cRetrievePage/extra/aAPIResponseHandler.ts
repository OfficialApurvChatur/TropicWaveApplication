import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";


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

  }
}

export default apiResponseHandler;
