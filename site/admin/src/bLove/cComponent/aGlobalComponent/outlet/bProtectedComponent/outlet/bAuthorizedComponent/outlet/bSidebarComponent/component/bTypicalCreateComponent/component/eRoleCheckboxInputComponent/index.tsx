import React from "react"

import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";


const SpecialCheckboxInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* SpecialCheckboxInputComponent */}

      <div className="grid gap-3" >
        <FormField control={form.control} name={eachInput.name} render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>{eachInput.label}:</FormLabel>
            </div>

            {eachInput.options?.map((eachOption: any, indexOption: number) => (eachOption.value &&
              <div className="flex flex-col items-start space-y-2" key={eachOption.value}>
                <FormField
                  control={form.control}
                  name={`${eachInput.name}[${indexOption}].menu`}
                  defaultValue={eachOption.value}
                  render={() => (
                    <FormItem className="items-center space-x-4">
                      <FormLabel className="text-sm font-bold">{eachOption.label}:</FormLabel>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-5 gap-2 pb-4">
                  {eachOption.cAccessPoint.map((eachPoint: any, indexPoint: number) => (eachPoint._id &&
                    <div className="flex flex-row align-middle items-center space-x-2 space-y-0 ml-4 px-2" key={eachPoint._id}>
                      <FormField
                        control={form.control}
                        name={`${eachInput.name}[${indexOption}].access[${indexPoint}].hasAccess`}
                        defaultValue={false}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) => field.onChange(checked)}
                                aria-label={`Access to ${eachPoint.aTitle}`}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`${eachInput.name}[${indexOption}].access[${indexPoint}].accessPoint`}
                        defaultValue={eachPoint._id}
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-sm font-normal">{eachPoint.aTitle}</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <FormMessage />
          </FormItem>
        )} />      
      </div>

    </React.Fragment>
  )
}

export default SpecialCheckboxInputComponent;
