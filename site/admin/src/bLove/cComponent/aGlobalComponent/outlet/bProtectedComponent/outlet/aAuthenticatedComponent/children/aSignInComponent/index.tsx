import React from "react"

import TypicalAuthFormComponent from "../../component/aTypicalAuthFormComponent"


type SignInComponentType = {
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

const SignInComponent = (props: SignInComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignInComponent */}
      <TypicalAuthFormComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue}
        ReduxCall={props.ReduxCall} 
        APICall={props.APICall} 
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default SignInComponent;
