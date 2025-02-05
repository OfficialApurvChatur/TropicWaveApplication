import React from "react"

import TypicalListComponent from "../../../../component/aTypicalListComponent";


type BaseListComponentType = {
  header: { 
    title: string, 
    subtitle: string, 
    actions: { text: string, icon?: any, onClick: any }[], 
    links: { text: string, icon?: any, to: string }[] 
  },
  data: any,
  columns: any,
  APICall: any
}

const BaseListComponent = (props: BaseListComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseListComponent */}
      <TypicalListComponent 
        header={props.header} 
        data={props.data} 
        columns={props.columns} 
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default BaseListComponent;
