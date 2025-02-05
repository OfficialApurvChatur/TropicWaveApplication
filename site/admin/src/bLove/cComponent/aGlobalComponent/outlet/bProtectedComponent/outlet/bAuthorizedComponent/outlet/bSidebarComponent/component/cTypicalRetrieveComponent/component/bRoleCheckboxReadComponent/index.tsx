import { CrossCircledIcon } from "@radix-ui/react-icons";
import { CheckCircle2 } from "lucide-react";
import React from "react"


const RoleCheckboxReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* RoleCheckboxReadComponent */}

      <div className="grid text-sm gap-0.5">
        <span className="font-medium" >{eachField.label} :</span>

        {eachField.value.map((eachValue: any, indexValue: number) => (eachValue.menu &&
          <div className="flex flex-col items-start space-y-2 mt-2" key={indexValue}>
            <h3 className="text-sm">{eachValue.menu.aTitle}</h3>

            <ul className="grid grid-cols-5 gap-2 pb-4" >
              {eachValue?.access?.map((eachAccessPoint: any, indexAccessPoint: number) => (
                <li key={indexAccessPoint} className="flex flex-row items-center space-x-3 space-y-0 ml-4 px-2">
                  <div className="flex justify-center items-center gap-2" >
                    <span
                      className={`${
                        eachAccessPoint?.hasAccess ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {eachAccessPoint.hasAccess
                        ? <CheckCircle2 className="h-6 w-6" /> : <CrossCircledIcon className="h-6 w-6" />}
                    </span>
                    <span className="text-sm font-normal" >{eachAccessPoint?.accessPoint?.aTitle}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </React.Fragment>
  )
}

export default RoleCheckboxReadComponent;
