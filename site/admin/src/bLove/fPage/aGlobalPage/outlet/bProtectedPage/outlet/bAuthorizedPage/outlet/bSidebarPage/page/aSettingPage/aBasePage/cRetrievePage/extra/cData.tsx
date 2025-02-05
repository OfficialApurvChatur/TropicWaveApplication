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
        fields: [
          { label: "Image", type: "image", value: retrieveAPIResponse.data.retrieve.aImage },
          { label: "Title", type: "text", value: retrieveAPIResponse.data.retrieve.aTitle },
        ],  
      },
  
      // Personal Information
      {
        display: false,
        title: "Personal Information",
        subtitle: "This is just some subtitle for the personal information...",
        fields: [],  
      },
  
      // Relation Information
      {
        display: false,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        fields: [],  
      },
  
      // More Information
      {
        display: false,
        title: "More Information",
        subtitle: "This is just some subtitle for the more information...",
        fields: [],  
      },
  
      // Critical Information
      {
        display: false,
        title: "Critical Information",
        subtitle: "This is just some subtitle for the critical information...",
        fields: [],  
      },
  
    ]) : []
  ) : []
)

export default data;
