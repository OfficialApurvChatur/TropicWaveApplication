import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type RoleRetrieveComponentType = {
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

const RoleRetrieveComponent = (props: RoleRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* RoleRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default RoleRetrieveComponent;
