import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Profile Update",
  subtitle: "This is just some subtitle for the profile update",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Delete Profile", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.eProfileRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
