import React from "react"

import { RadioGroup, RadioGroupItem } from "@/aConnection/bShadcnConnection/components/ui/radio-group";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";


const RadioInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* RadioInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <div className="mb-4">
                <FormLabel>{eachInput.label}:</FormLabel>
              </div>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {eachInput.options?.map((each: any, index: number) => (
                    <React.Fragment key={index} >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={each.value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {each.label}
                        </FormLabel>
                      </FormItem>
                    </React.Fragment>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>                            
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default RadioInputComponent;
