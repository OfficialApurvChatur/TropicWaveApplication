import axios from "axios";

import baseURL from "@/bLove/hAsset/aBaseURl";


const handleImageUpdateForObject = async (event: any, eachInput: any, form: any, setFileLoading: any, fileID: any) => {
  setFileLoading(true)

  if (!event.target.files?.[0]) {
    alert("Please select an image!");
    return setFileLoading(false);
  }

  const formData = new FormData();
  formData.append("image", event.target.files?.[0]);
  formData.append("folder", eachInput.folderName);
  formData.append("public_id", fileID.split("/").pop().split(".")[0]);

  try {
    const response = await axios.post<{ update: { url: string, pid: string } }>(
      `${baseURL}/single-image/update/`,
      formData,
      { 
        headers: { "Content-Type": "multipart/form-data" }, 
        withCredentials: true,
      },
    );

    console.log(response.data.update);
    form.setValue(eachInput.name, response.data.update.url)
    return;
  } catch (error) {
    console.error(error);
  } finally {
    setFileLoading(false)
  } 
}

export default handleImageUpdateForObject;
