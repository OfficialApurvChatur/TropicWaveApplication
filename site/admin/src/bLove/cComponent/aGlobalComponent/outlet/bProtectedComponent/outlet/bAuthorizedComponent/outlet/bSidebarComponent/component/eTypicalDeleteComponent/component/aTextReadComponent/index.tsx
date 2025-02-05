import React from "react"


const TextReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* TextReadComponent */}

      <div className="grid text-sm gap-0.5" >
        <span className="font-medium" >{eachField.label} :</span>
        <span>{eachField.value}</span>
      </div>

    </React.Fragment>
  )
}

export default TextReadComponent;
