import React from 'react'


const ErrorComponent = (props: any) => {
  // JSX
  return (
    <React.Fragment>
      {/* ErrorComponent */}
      <div className="flex justify-center items-center h-96" >
        {props.message || "Waiting..."}
      </div>
    </React.Fragment>
  )
}

export default ErrorComponent;
