import React from "react"
import { Link } from "react-router-dom";

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/aConnection/bShadcnConnection/components/ui/card";

import TextReadComponent from "./component/aTextReadComponent";


const extras = {
  header: {
    title: "Data Read One",
    subtitle: "This is just some subtitle for the data-form-one...",
    buttons: [
      { text: "Button", to: "" }
    ]
  },
  data: [
    // Basic Information
    {
      display: true,
      title: "Basic Information",
      subtitle: "This is just some subtitle for the basic information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Personal Information
    {
      display: true,
      title: "Personal Information",
      subtitle: "This is just some subtitle for the personal information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Relation Information
    {
      display: true,
      title: "Relation Information",
      subtitle: "This is just some subtitle for the relation information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // More Information
    {
      display: true,
      title: "More Information",
      subtitle: "This is just some subtitle for the more information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

    // Critical Information
    {
      display: true,
      title: "Critical Information",
      subtitle: "This is just some subtitle for the critical information...",
      fields: [
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
        { label: "Title", type: "text", value: "This is the value of Title..." },
      ],  
    },

  ],

}

const DataReadOneComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* DataReadOneComponent */}

      <div className="flex-1 px-4">
        <div className="flex items-center justify-between space-y-2 mb-8" >
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{extras.header.title}</h2>
            <p className="text-muted-foreground">{extras.header.subtitle}</p>
          </div>
          {extras.header.buttons.length > 0 && (
            <div className="flex items-center space-x-2">
              {extras.header.buttons.map((each: any) => (
                <Button asChild ><Link to={each.to} >{each.text}</Link></Button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-8">

          {/* Section */}
          {extras.data?.filter((eachSection: any) => eachSection.display)?.map((eachSection: any, indexSection: number) => eachSection.display && (
            <React.Fragment key={indexSection} >
              <Card className="overflow-hidden" >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                  <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                      {eachSection.title}
                    </CardTitle>
                    <CardDescription>{eachSection.subtitle}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 pt-4">
                    {eachSection.fields.map((eachField: any, indexInput: any) => (
                      <React.Fragment>

                        {/* For I/P Type: Text, Email, Number */}
                        {((eachField.type === "text" || eachField.type === "email" || eachField.type === "number" || eachField.type === "password") && 
                          <TextReadComponent key={indexInput} eachField={eachField} />
                        )}

                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </React.Fragment>
          ))}
        </div>

      </div>
    </React.Fragment>
  )
}

export default DataReadOneComponent;
