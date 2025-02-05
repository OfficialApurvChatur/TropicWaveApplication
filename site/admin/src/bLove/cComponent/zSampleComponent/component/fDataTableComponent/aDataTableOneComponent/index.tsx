import React from "react"
import { z } from "zod"
import { Link } from "react-router-dom"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import { tasks } from "./data/tasks"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"


// Simulate a database read for tasks.
function getTasks() {
  return z.array(taskSchema).parse(tasks); // Validate and parse with Zod
}

const DataTableOneComponent = () => {
  const tasks = getTasks();

  return (
    <React.Fragment>
      {/* DataTableOneComponent */}
      
      <div className="h-full flex-1 flex-col space-y-8 md:flex px-4">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Data Table One</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button asChild ><Link to="" >Button</Link></Button>
          </div>
        </div>

        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" >
          <DataTable data={tasks} columns={columns} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DataTableOneComponent
