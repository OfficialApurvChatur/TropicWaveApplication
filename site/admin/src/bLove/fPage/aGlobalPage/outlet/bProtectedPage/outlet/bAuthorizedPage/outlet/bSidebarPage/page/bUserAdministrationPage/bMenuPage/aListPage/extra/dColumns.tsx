import { Link } from "react-router-dom"
import { ColumnDef } from "@tanstack/react-table"

import fullRoute from "@/bLove/gRoute/bFullRoute"
import backgroundImage from "@/bLove/hAsset/defaultImage.png";
import { DataTableColumnHeader } from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/component/aTypicalListComponent/components/data-table-column-header"
import { ListSchema } from "./bSchema"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/aConnection/bShadcnConnection/components/ui/dropdown-menu"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Badge } from "@/aConnection/bShadcnConnection/components/ui/badge"


const columns: ColumnDef<ListSchema>[] = [
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <DataTableColumnHeader className="hidden" column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="hidden">{row.getValue("_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "aImage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      return (
        <div className="rounded-md flex items-center justify-center w-14 h-14 overflow-hidden">
          <img
            src={row.getValue("aImage") || backgroundImage}
            className="rounded-md object-cover w-full h-full"
            alt="Uploaded Preview"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "aTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[300px] truncate font-normal hover:underline">
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}/${row.getValue("_id")}`} >
              {row.getValue("aTitle")}
            </Link>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "cAccessPoint",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Access Point" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[600px] grid grid-cols-4 gap-2">
            {((row.getValue("cAccessPoint")) as any)?.map((each: any, index: number) => (
              <Badge key={index} >{each.aTitle}</Badge>
            ))}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted" >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.cRetrieveRoute}/${row.getValue("_id")}`} >
              Retrieve
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.dUpdateRoute}/${row.getValue("_id")}`} >
              Update
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to={`${fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.bUserAdministrationRoute.bMenuRoute.eDeleteRoute}/${row.getValue("_id")}`} >
              Delete
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export default columns;
