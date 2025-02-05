import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "User Retrieve",
  subtitle: "This is just some subtitle for the user retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update User", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.dUpdateRoute}/${id}` },
    { text: "Delete User", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.dUserRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
