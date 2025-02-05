import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type BaseRetrieveComponentType = {
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

const BaseRetrieveComponent = (props: BaseRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default BaseRetrieveComponent;
