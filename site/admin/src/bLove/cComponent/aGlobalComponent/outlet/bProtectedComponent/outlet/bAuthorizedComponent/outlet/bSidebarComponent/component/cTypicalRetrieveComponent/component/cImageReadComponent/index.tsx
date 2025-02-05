import React from "react"

import backgroundImage from "@/bLove/hAsset/defaultImage.png";


const ImageReadComponent = (props: any) => {
  // Destructure Props
  const { eachField } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ImageReadComponent */}

      <div className="grid text-sm gap-1" >
        <span className="font-medium" >{eachField.label} :</span>
        <div className="rounded-md flex items-center justify-center w-28 h-28 overflow-hidden">
          <img
            src={eachField.value || backgroundImage}
            className="rounded-md object-cover w-full h-full"
            alt="Uploaded Preview"
          />
        </div>
      </div>

    </React.Fragment>
  )
}

export default ImageReadComponent;
