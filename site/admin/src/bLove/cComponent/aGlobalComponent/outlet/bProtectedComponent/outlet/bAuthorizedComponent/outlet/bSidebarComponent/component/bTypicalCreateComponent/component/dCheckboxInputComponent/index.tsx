import React from "react"

import { Checkbox } from "@/aConnection/bShadcnConnection/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";


const CheckboxInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* CheckboxInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>{eachInput.label}:</FormLabel>
              </div>
              {eachInput.options?.map((each: any, index: number) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={eachInput.name}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={index}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(each.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange(field.value ? [...field.value, each.value] : [each.value])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== each.value
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {each.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default CheckboxInputComponent;
