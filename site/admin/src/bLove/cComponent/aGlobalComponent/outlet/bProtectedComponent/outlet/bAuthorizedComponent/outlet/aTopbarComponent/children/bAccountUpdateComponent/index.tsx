import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Loader2Icon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/aConnection/bShadcnConnection/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form'
import { toast } from '@/aConnection/bShadcnConnection/hooks/use-toast'
import { Button } from '@/aConnection/bShadcnConnection/components/ui/button'

import LoaderComponent from '@/bLove/cComponent/aGlobalComponent/component/aLoaderComponent'
import ErrorComponent from '@/bLove/cComponent/aGlobalComponent/component/bErrorComponent'
import backgroundImage from "@/bLove/hAsset/defaultImage.png";
import { Input } from '@/aConnection/bShadcnConnection/components/ui/input'
import handleImageUpdateForObject from '@/bLove/dUtility/aImageForObject/bHandleImageUpdateForObject'
import handleImageDeleteForObject from '@/bLove/dUtility/aImageForObject/cHandleImageDeleteForObject'
import handleImageCreateForObject from '@/bLove/dUtility/aImageForObject/aHandleImageCreateForObject'


type AccountUpdateComponentType = {
  formSchema: any,
  formDefaultValue: any,
  previousValue: any,
  ReduxCall: any
  APICall: any
  submitHandler: any
}

const AccountUpdateComponent = (props: AccountUpdateComponentType) => {
  // Variable
  const navigate = useNavigate();
  const [fileLoading, setFileLoading] = useState(false);

  // Form
  const form = useForm<z.infer<typeof props.formSchema>>({
    resolver: zodResolver(props.formSchema),
    mode: "onChange",
    defaultValues: props.formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof props.formSchema>) => {
    // console.log(data)

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    props.submitHandler(data, form, props.ReduxCall, props.APICall, navigate)
  } 

  // All Render
  // 1. First Render
  useEffect(() => {
    props.APICall.retrieveAPIResponse.isLoading ? null : 
    props.APICall.retrieveAPIResponse.isError ? null :
    props.APICall.retrieveAPIResponse.isSuccess ? (
      props.APICall.retrieveAPIResponse.data.success ? (
        props.previousValue(form, props.APICall)
      ) : null
    ) : null
  }, [props.APICall.retrieveAPIResponse])    
 
  // JSX
  return (
    <React.Fragment>
      {/* AccountUpdateComponent */}

      {
        (props.APICall.retrieveAPIResponse.isLoading || props.APICall.retrieveAPIResponse.isFetching) ? <LoaderComponent /> : 
        (props.APICall.retrieveAPIResponse.isError) ? <ErrorComponent message="Error..." /> :
        (props.APICall.retrieveAPIResponse.isSuccess) ? (
          (props.APICall.retrieveAPIResponse.data.success) ? (
            <React.Fragment>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate >

                  {/* Critical Information */}
                  <Card className="overflow-hidden" >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                      <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                          Critical Information
                        </CardTitle>
                        <CardDescription>This section contains critical information like first name, last name, etc.</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 pt-4">

                        {/* First Name */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eFirstname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter first name..." type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Last Name */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eLastname"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter last name..." type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Email */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter email..." type="email" disabled {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        {/* Mobile */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="eMobile"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Mobile :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter mobile..." type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>

                  {/* Basic Information */}
                  <Card className="overflow-hidden" >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                      <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                          Basic Information
                        </CardTitle>
                        <CardDescription>This section contains basic information like title, subtitle, etc.</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 pt-4">

                        {/* Image */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="aImage"
                            render={() => (
                              <FormItem>
                                <FormLabel>Image :</FormLabel>
                                <FormControl>
                                  <div className="flex items-center gap-4 rounded-lg">
                                    <div className="rounded-md flex items-center justify-center w-28 h-28 overflow-hidden">
                                      {fileLoading ? <Loader2Icon className="w-10 h-10 animate-spin" /> : (
                                        <img
                                          src={form?.watch("aImage") || backgroundImage}
                                          className="rounded-md object-cover w-full h-full"
                                          alt="Uploaded Preview"
                                        />
                                      )}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                      {form.watch("aImage") ? (
                                        <React.Fragment>
                                          <Button
                                            type="button"
                                            onClick={() => document.getElementById(`image-update`)?.click()}
                                            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
                                          >
                                            Edit Image
                                          </Button>
                                          
                                          <Input
                                            id={`image-update`}
                                            type="file"
                                            className="hidden"
                                            onChange={(event: any) => handleImageUpdateForObject(event, { name: "aImage", folderName: "user" }, form, setFileLoading, form.watch("aImage"))} 
                                          />

                                          <Button
                                            type="button"
                                            onClick={() => handleImageDeleteForObject({ name: "aImage", folderName: "user" }, form, setFileLoading, form.watch("aImage"))} 
                                            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
                                          >
                                            Remove Image
                                          </Button>
                                        </React.Fragment>
                                      ) : (
                                        <React.Fragment>
                                          <Button
                                            type="button"
                                            onClick={() => document.getElementById(`image-create`)?.click()}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                          >
                                            Choose Image
                                          </Button>
                      
                                          <Input
                                            id={`image-create`}
                                            type="file"
                                            className="hidden"
                                            onChange={(event: any) => handleImageCreateForObject(event, { name: "aImage", folderName: "user" }, form, setFileLoading)}
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

                        {/* Title */}
                        <div className="grid gap-3" >
                          <FormField
                            control={form.control}
                            name="aTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title :</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter title..." type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    type="submit"
                    disabled={props.APICall.updateAPIResponse.isLoading}
                  >{props.APICall.updateAPIResponse.isLoading ? "Loading..." : "Update"}</Button>
                </form>
              </Form>
            </React.Fragment>
          ) : []
        ) : []
      }

    </React.Fragment>
  )
}

export default AccountUpdateComponent;
