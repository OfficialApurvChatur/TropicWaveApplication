import axios from "axios";

import baseURL from "@/bLove/hAsset/aBaseURl";


const handleImageCreateForObject = async (event: any, eachInput: any, form: any, setFileLoading: any) => {
  setFileLoading(true)

  if (!event.target.files?.[0]) {
    alert("Please select an image!");
    return setFileLoading(false);
  }

  const formData = new FormData();
  formData.append("image", event.target.files?.[0]);
  formData.append("folder", eachInput.folderName);

  try {
    const response = await axios.post<{ create: { url: string, pid: string } }>(
      `${baseURL}/single-image/create/`,
      formData,
      { 
        headers: { "Content-Type": "multipart/form-data" }, 
        withCredentials: true,
      },
    );

    // console.log(response.data.create);
    form.setValue(eachInput.name, response.data.create.url)
    return;
  } catch (error) {
    console.error(error);
  } finally {
    setFileLoading(false)
  }
}

export default handleImageCreateForObject;
