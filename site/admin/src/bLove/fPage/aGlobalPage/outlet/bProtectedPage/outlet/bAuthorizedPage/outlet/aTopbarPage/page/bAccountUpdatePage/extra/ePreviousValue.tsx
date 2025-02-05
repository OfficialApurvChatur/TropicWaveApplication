const previousValue = (form: any, APICall: any) => (
  form.setValue("aImage", APICall.retrieveAPIResponse.data.user_account_retrieve?.aImage),
  form.setValue("aTitle", APICall.retrieveAPIResponse.data.user_account_retrieve?.aTitle),

  form.setValue("eFirstname", APICall.retrieveAPIResponse.data.user_account_retrieve?.eFirstname),
  form.setValue("eLastname", APICall.retrieveAPIResponse.data.user_account_retrieve?.eLastname),
  form.setValue("eEmail", APICall.retrieveAPIResponse.data.user_account_retrieve?.eEmail),
  form.setValue("eMobile", APICall.retrieveAPIResponse.data.user_account_retrieve?.eMobile)
)

export default previousValue;
