import apiConnection from "@/aConnection/cAPIConnection";


const userAccountAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    userAccountRetrieveAPI: builder.query({
      query: () => ({
        url: `user/account/retrieve/`,
        method: "GET",
      }),
    }),

    userAccountUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `user/account/update/`,
        method: "PUT",
        body: data.body
      })
    }),

  })
})

export default userAccountAPIEndpoint;
