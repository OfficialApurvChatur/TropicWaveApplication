import React, { useState } from "react"
import { Loader2Icon } from "lucide-react";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/aConnection/bShadcnConnection/components/ui/form";
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";

import handleImageCreateForObject from "@/bLove/dUtility/aImageForObject/aHandleImageCreateForObject";
import handleImageDeleteForObject from "@/bLove/dUtility/aImageForObject/cHandleImageDeleteForObject";
import handleImageUpdateForObject from "@/bLove/dUtility/aImageForObject/bHandleImageUpdateForObject";
import backgroundImage from "@/bLove/hAsset/defaultImage.png";


const ImageInputComponent = (props: any) => {
  // Destructure Props
  const { form, eachInput } = props;

  // Variable
  const [fileLoading, setFileLoading] = useState(false)

  // JSX
  return (
    <React.Fragment>
      {/* ImageInputComponent */}

      <div className="grid gap-3" >
        <FormField
          control={form.control}
          name={eachInput.name}
          render={() => (
            <FormItem>
              <FormLabel>{eachInput.label} :</FormLabel>
              <FormControl>
                <div className="flex items-center gap-4 rounded-lg">
                  <div className="rounded-md flex items-center justify-center w-28 h-28 overflow-hidden">
                    {fileLoading ? <Loader2Icon className="w-10 h-10 animate-spin" /> : (
                      <img
                        src={form?.watch(eachInput.name) || backgroundImage}
                        className="rounded-md object-cover w-full h-full"
                        alt="Uploaded Preview"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    {form.watch(eachInput.name) ? (
                      <React.Fragment>
                        <Button
                          type="button"
                          onClick={() => document.getElementById(`${eachInput.name}-update`)?.click()}
                          className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                          disabled={fileLoading}
                        >
                          Edit Image
                        </Button>
                        
                        <Input
                          id={`${eachInput.name}-update`}
                          type="file"
                          className="hidden"
                          disabled={fileLoading}
                          onChange={(event: any) => handleImageUpdateForObject(event, eachInput, form, setFileLoading, form.watch(eachInput.name))} 
                        />

                        <Button
                          type="button"
                          onClick={() => handleImageDeleteForObject(eachInput, form, setFileLoading, form.watch(eachInput.name))} 
                          className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
                          disabled={fileLoading}
                        >
                          Remove Image
                        </Button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Button
                          type="button"
                          onClick={() => document.getElementById(`${eachInput.name}-create`)?.click()}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                          disabled={fileLoading}
                        >
                          Choose Image
                        </Button>
    
                        <Input
                          id={`${eachInput.name}-create`}
                          type="file"
                          className="hidden"
                          disabled={fileLoading}
                          onChange={(event: any) => handleImageCreateForObject(event, eachInput, form, setFileLoading)}
                        />
                      </React.Fragment>
                    )}                    
                  </div>
                </div>              
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

    </React.Fragment>
  )
}

export default ImageInputComponent;
