const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),

  form.setValue("cUser", APICall.retrieveAPIResponse.data.retrieve?.cUser)
)

export default previousValue;
