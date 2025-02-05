const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.retrieve?.aTitle),

  form.setValue("cRole", APICall.retrieveAPIResponse.data.retrieve?.cRole),
  form.setValue("cProfile", APICall.retrieveAPIResponse.data.retrieve?.cProfile),
  
  form.setValue("eFirstname", APICall.retrieveAPIResponse.data.retrieve?.eFirstname),
  form.setValue("eLastname", APICall.retrieveAPIResponse.data.retrieve?.eLastname),
  form.setValue("eEmail", APICall.retrieveAPIResponse.data.retrieve?.eEmail),
  form.setValue("eMobile", APICall.retrieveAPIResponse.data.retrieve?.eMobile)
)

export default previousValue;
