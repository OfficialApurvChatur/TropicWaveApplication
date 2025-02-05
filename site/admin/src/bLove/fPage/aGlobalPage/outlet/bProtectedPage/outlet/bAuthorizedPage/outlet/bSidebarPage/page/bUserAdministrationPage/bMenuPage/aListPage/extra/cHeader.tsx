import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Menu List",
  subtitle: "This is just some subtitle for the menu list",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Menu", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.bCreateRoute },
  ]
})

export default header;
