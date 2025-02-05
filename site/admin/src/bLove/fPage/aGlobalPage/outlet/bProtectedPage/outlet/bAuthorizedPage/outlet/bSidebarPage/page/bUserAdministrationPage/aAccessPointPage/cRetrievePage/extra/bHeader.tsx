import { RefreshCcw } from "lucide-react";
import fullRoute from "@/bLove/gRoute/bFullRoute";


const header = ({ id, retrieveAPIResponse }: { id: string, retrieveAPIResponse: any }) => ({
  title: "Access Point Retrieve",
  subtitle: "This is just some subtitle for the access point retrieve",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: retrieveAPIResponse.refetch },
  ],
  links: [
    { text: "Update Access Point", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.dUpdateRoute}/${id}` },
    { text: "Delete Access Point", to: `${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.eDeleteRoute}/${id}` },
  ]
})

export default header;
