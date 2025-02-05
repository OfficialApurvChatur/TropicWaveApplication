import { toast } from "@/aConnection/bShadcnConnection/hooks/use-toast";


const apiResponseHandler = {
  listAPIResponseHandler: (listAPIResponse: any) => {
    // Handle loading
    if (listAPIResponse.isLoading || listAPIResponse.isFetching) return;

    // Handle error
    if (listAPIResponse.isError) {
      if (listAPIResponse.error && listAPIResponse.error.originalStatus === 404) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Cannot connect with server.",
          description: "There was a problem with server connection.",
        });
      } else if (listAPIResponse.error && listAPIResponse.error?.data?.success === false) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: listAPIResponse.error?.data.message || "There was an error.",
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
    if (listAPIResponse.isSuccess && listAPIResponse.data?.success) {
      return toast({
        variant: "default",
        title: "Yayy! Congratulations...",
        description: listAPIResponse.data.message || "Something loaded successfully.",
      });
    }

  }
}

export default apiResponseHandler;
