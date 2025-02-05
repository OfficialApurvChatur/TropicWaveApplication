import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

import backgroundImage from "@/bLove/hAsset/auth-model.jpg";

import { cn } from "@/aConnection/bShadcnConnection/lib/utils"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button"
import { Card, CardContent } from "@/aConnection/bShadcnConnection/components/ui/card"
import { Input } from "@/aConnection/bShadcnConnection/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from '@/aConnection/bShadcnConnection/components/ui/alert';
import { GalleryVerticalEnd, RocketIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/aConnection/bShadcnConnection/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/aConnection/bShadcnConnection/components/ui/form';


type TypicalAuthFormComponentType = {
  header: { 
    title: string, 
    subtitle: string,
    submitButtonText: string, 
    links: { note: string, text: string, to: string }[],
    showSampleCredential: boolean 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  ReduxCall: any,
  APICall: any,
  submitHandler: any
}

const TypicalAuthFormComponent = (props: TypicalAuthFormComponentType) => {
  // Variable
  const navigate = useNavigate();

  // Form
  const form = useForm<z.infer<typeof props.formSchema>>({
    resolver: zodResolver(props.formSchema),
    mode: "onChange",
    defaultValues: props.formDefaultValue
  })

  // Submit Handler
  const onSubmit = async (data: z.infer<typeof props.formSchema>) => {
    console.log(data)

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

  // JSX
  return (
    <React.Fragment>
      {/* TypicalAuthFormComponent */}

      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm md:max-w-3xl flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 self-center font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            TropicWave Application
          </Link>

          <div className={cn("flex flex-col gap-6")}>
            <Card className="overflow-hidden">
              <CardContent className="grid p-0 md:grid-cols-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">{props.header.title}</h1>
                        <p className="text-balance text-muted-foreground">{props.header.subtitle}</p>
                      </div>

                      {props.header.showSampleCredential && (
                        <div>
                          <Alert>
                            <RocketIcon className="h-4 w-4" />
                            <AlertTitle>Sample User!</AlertTitle>
                            <AlertDescription>
                              <p><b>Email:</b> shraddha.kapoor@tropicwave.com</p> 
                              <p><b>Password:</b> Shraddha@123</p>
                              <p><b>Role:</b> Super Admin</p>
                            </AlertDescription>
                          </Alert>
                        </div>
                      )}

                      {props.data?.map((eachInput: any, indexInput: number) => (
                        <React.Fragment key={indexInput} >
                          <div className="grid gap-2">
                            <FormField
                              control={form.control}
                              name={eachInput.name}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{eachInput.label} :</FormLabel>
                                  <FormControl>
                                    <Input placeholder={eachInput.placeholder} type={eachInput.type} {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </React.Fragment>
                      ))}

                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={props.APICall.submitAPIResponse.isLoading || props.APICall?.userAccountRetrieveAPIResponse?.isLoading}
                      >
                        {(props.APICall.submitAPIResponse.isLoading || props.APICall?.userAccountRetrieveAPIResponse?.isLoading) ? "Loading..." : props.header.submitButtonText}
                      </Button>

                      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                          OR
                        </span>
                      </div>

                      <div className="flex flex-col flex-1 gap-2" >
                        {props.header.links.length > 0 && (
                          props.header.links.map((each) => (
                            <div className="text-center text-sm">
                              {each?.note}{" "}
                              <Link to={each.to} className="underline underline-offset-4" >
                                {each.text}
                              </Link>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </form>
                </Form>

                <div className="relative hidden bg-muted md:block">
                  <img
                    src={backgroundImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
              By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TypicalAuthFormComponent
