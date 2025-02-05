import axios from "axios";

import baseURL from "@/bLove/hAsset/aBaseURl";


const handleImageDeleteForObject = async (eachInput: any, form: any, setFileLoading: any, fileID: any) => {
  setFileLoading(true)
  
  try {
    // const response = 
    await axios.post(
      `${baseURL}/single-image/delete/`,
      {
        folder: eachInput.folderName,
        public_id: fileID.split("/").pop().split(".")[0]
      },
      { 
        withCredentials: true,
      },
    );

    // console.log(response.data);
    form.setValue(eachInput.name, null)
    return;
  } catch (error) {
    console.error(error);
  } finally {
    setFileLoading(false)
  } 
}

export default handleImageDeleteForObject;
