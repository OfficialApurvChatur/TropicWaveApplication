import React from "react"

import TypicalUpdateComponent from "../../../../component/dTypicalUpdateComponent";


type RoleUpdateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  previousValue: any,
  params: any,
  APICall: any
  submitHandler: any
}

const RoleUpdateComponent = (props: RoleUpdateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleUpdateComponent */}
      <TypicalUpdateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue} 
        previousValue= {props.previousValue}
        params= {props.params}
        APICall= {props.APICall}
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default RoleUpdateComponent;
