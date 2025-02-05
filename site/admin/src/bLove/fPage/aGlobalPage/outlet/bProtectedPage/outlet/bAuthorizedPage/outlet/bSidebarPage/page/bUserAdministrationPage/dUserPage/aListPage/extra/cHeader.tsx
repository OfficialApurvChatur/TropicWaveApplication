import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "User List",
  subtitle: "This is just some subtitle for the user list",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create User", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.bCreateRoute },
  ]
})

export default header;
