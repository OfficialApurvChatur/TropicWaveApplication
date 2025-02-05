const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),

  form.setValue("cAccessPoint", APICall.retrieveAPIResponse.data.retrieve?.cAccessPoint?.map((each: any) => each._id))
)

export default previousValue;
