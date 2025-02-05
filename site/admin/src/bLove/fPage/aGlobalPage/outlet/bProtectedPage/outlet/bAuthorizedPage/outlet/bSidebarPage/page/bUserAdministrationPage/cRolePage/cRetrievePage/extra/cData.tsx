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
        display: true,
        title: "Relation Information",
        subtitle: "This is just some subtitle for the relation information...",
        fields: [
          { label: "Menu", type: "role-checkbox", value: 
            retrieveAPIResponse.data.retrieve.cMenu
              ?.filter((each: any) => each.menu)
              ?.map((each: any) => {
                let itsMenu;
                let itsAccess: any[] = []; 

                // Check if each.menu._id exists, then assign
                if (each.menu._id) itsMenu = each.menu;

                // Map over cAccessPoint to build access points
                itsAccess = each.menu.cAccessPoint.map((eachPoint: any) => {
                  // Find the matching access point from previousAccess
                  const access = each.access.find((access: any) => access.accessPoint === eachPoint._id);
                  
                  return {
                    accessPoint: eachPoint,
                    hasAccess: access ? access.hasAccess : false // Use default false if no match
                  };
                });

                // Return the menu and its updated access
                return {
                  menu: itsMenu,
                  access: itsAccess
                };
              }) 
          },
        ],  
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
