import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Access Point List",
  subtitle: "This is just some subtitle for the access point list",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Access Point", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.aAccessPointRoute.bCreateRoute },
  ]
})

export default header;
