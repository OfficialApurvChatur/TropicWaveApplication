import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Role List",
  subtitle: "This is just some subtitle for the role list",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Role", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.cRoleRoute.bCreateRoute },
  ]
})

export default header;
