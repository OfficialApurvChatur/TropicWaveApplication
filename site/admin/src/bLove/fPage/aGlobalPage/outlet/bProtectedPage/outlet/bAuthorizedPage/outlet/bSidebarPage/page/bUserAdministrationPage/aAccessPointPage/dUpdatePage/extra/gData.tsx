const data = ({ retrieveAPIResponse }: { retrieveAPIResponse: any }) => (
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
          { name: "aImage", label: "Image", type: "image", folderName: "accesspoint" },
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
        display: false,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        inputs: [],  
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
