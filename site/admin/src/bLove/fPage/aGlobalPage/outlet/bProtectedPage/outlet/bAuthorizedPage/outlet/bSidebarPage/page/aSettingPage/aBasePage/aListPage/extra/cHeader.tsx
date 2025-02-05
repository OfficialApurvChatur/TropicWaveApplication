import fullRoute from "@/bLove/gRoute/bFullRoute";
import { RefreshCcw } from "lucide-react";


const header = ({ listAPIResponse }: { listAPIResponse: any }) => ({
  title: "Base List",
  subtitle: "This is just some subtitle for the base list",
  actions: [
    { text: "Refetch", icon: RefreshCcw, onClick: listAPIResponse.refetch },
  ],
  links: [
    { text: "Create Base", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute },
  ]
})

export default header;
