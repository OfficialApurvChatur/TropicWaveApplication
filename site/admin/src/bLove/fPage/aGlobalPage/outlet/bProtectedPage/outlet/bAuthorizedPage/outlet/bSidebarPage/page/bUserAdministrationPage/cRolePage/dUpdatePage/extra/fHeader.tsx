import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Role Update",
  subtitle: "This is just some subtitle for the role update",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Delete Role", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
