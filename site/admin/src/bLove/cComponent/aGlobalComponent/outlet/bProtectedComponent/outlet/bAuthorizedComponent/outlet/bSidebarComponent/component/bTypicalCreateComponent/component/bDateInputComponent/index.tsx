import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react"

import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Calendar } from "@/aConnection/bShadcnConnection/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/aConnection/bShadcnConnection/components/ui/popover";
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";


const DateInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // JSX
  return (
    <React.Fragment>
      {/* DateInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{eachInput.label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default DateInputComponent;
