import React from "react"

import TypicalAuthFormComponent from "../../component/aTypicalAuthFormComponent"


type SignUpComponentType = {
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

const SignUpComponent = (props: SignUpComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* SignUpComponent */}
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

export default SignUpComponent;
