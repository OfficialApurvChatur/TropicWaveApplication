import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type AccessPointRetrieveComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  params: any,
  APICall: any
}

const AccessPointRetrieveComponent = (props: AccessPointRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* AccessPointRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default AccessPointRetrieveComponent;
