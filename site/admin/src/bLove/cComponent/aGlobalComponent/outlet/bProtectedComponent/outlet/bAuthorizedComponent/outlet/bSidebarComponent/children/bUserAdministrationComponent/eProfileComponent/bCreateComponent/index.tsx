import React from "react"

import TypicalCreateComponent from "../../../../component/bTypicalCreateComponent";


type ProfileCreateComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  formSchema: any,
  formDefaultValue: any,
  APICall: any,
  submitHandler: any
}

const ProfileCreateComponent = (props: ProfileCreateComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProfileCreateComponent */}
      <TypicalCreateComponent 
        header={props.header} 
        data={props.data} 
        formSchema={props.formSchema} 
        formDefaultValue={props.formDefaultValue}
        APICall={props.APICall} 
        submitHandler={props.submitHandler}
      />
    </React.Fragment>
  )
}

export default ProfileCreateComponent;
