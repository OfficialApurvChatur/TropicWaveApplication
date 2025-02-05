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
          { name: "aImage", label: "Image", type: "image", folderName: "user" },
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
          { name: "cRole", label: "Role", type: "radio", 
            options: 
              APICall.roleListAPIResponse.isLoading ? null : 
              APICall.roleListAPIResponse.isError ? null :
              APICall.roleListAPIResponse.isSuccess ? (
                APICall.roleListAPIResponse.data.success ? (
                  APICall.roleListAPIResponse.data.list.length > 0 ? (
                    APICall.roleListAPIResponse.data.list.map((each: any) => ({
                      value: each._id, label: each.aTitle
                    }))
                  ) : []
                ) : []
              ) : []
          },
          { name: "cProfile", label: "Profile", type: "radio", 
            options: 
              APICall.profileListAPIResponse.isLoading ? null : 
              APICall.profileListAPIResponse.isError ? null :
              APICall.profileListAPIResponse.isSuccess ? (
                APICall.profileListAPIResponse.data.success ? (
                  APICall.profileListAPIResponse.data.list.length > 0 ? (
                    APICall.profileListAPIResponse.data.list.map((each: any) => ({
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
        display: true,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        inputs: [
          { name: "eFirstname", label: "Firstname", type: "text", placeholder: "Please enter firstname..." },
          { name: "eLastname", label: "Lastname", type: "text", placeholder: "Please enter lastname..." },
          { name: "eEmail", label: "Email", type: "email", placeholder: "Please enter email...", disabled: true },
          { name: "eMobile", label: "Mobile", type: "text", placeholder: "Please enter mobile..." },
        ],  
      },
      
    ]) : []
  ) : []
)

export default data;
