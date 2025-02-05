const data = ({ APICall }: { APICall: any }) => ([
  // Basic Information
  {
    display: true,
    title: "Basic Information",
    subtitle: "This is just some subtitle for the basic information...",
    inputs: [
      { name: "aImage", label: "Image", type: "image", folderName: "menu" },
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
      { name: "cAccessPoint", label: "Access Point", type: "checkbox", 
        options: 
          APICall.accessPointListAPIResponse.isLoading ? null : 
          APICall.accessPointListAPIResponse.isError ? null :
            APICall.accessPointListAPIResponse.isSuccess ? (
              APICall.accessPointListAPIResponse.data.success ? (
                APICall.accessPointListAPIResponse.data.list.length > 0 ? (
                  APICall.accessPointListAPIResponse.data.list.map((each: any) => ({
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
])

export default data;
