import React from "react"

import TypicalRetrieveComponent from "../../../../component/cTypicalRetrieveComponent";


type UserRetrieveComponentType = {
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

const UserRetrieveComponent = (props: UserRetrieveComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* UserRetrieveComponent */}
      <TypicalRetrieveComponent 
        header={props.header} 
        data={props.data}
        params= {props.params}
        APICall={props.APICall} 
      />
    </React.Fragment>
  )
}

export default UserRetrieveComponent;
