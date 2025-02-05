const data = ({ retrieveAPIResponse, APICall }: { retrieveAPIResponse: any, APICall: any }) => (
  retrieveAPIResponse.isLoading ? null : 
  retrieveAPIResponse.isError ? null :
  retrieveAPIResponse.isSuccess ? (
    retrieveAPIResponse.data.success ? ([
      // Basic Information
      {
        display: true,
        title: "Basic Information",
        subtitle: "This is just some subtitle for the basic information...",
        inputs: [
          { name: "aImage", label: "Image", type: "image", folderName: "profile" },
          { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        ],  
      },

      // Personal Information
      {
        display: false,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        inputs: [],  
      },

      // Relation Information
      {
        display: true,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        inputs: [
          { name: "cUser", label: "User", type: "radio", 
            options: 
              APICall.userListAPIResponse.isLoading ? null : 
              APICall.userListAPIResponse.isError ? null :
              APICall.userListAPIResponse.isSuccess ? (
                APICall.userListAPIResponse.data.success ? (
                  APICall.userListAPIResponse.data.list.length > 0 ? (
                    APICall.userListAPIResponse.data.list.map((each: any) => ({
                      value: each._id, label: each.aTitle
                    }))
                  ) : []
                ) : []
              ) : []
          },
        ],  
      },

      // More Information
      {
        display: false,
        title: "More Information",
        subtitle: "This is just some subtitle for the more information...",
        inputs: [],  
      },

      // Critical Information
      {
        display: false,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        inputs: [],  
      },
      
    ]) : []
  ) : []
)

export default data;
