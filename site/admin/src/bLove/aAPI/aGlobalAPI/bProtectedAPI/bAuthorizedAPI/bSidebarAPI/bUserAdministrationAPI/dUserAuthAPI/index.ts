import apiConnection from "@/aConnection/cAPIConnection";


const userAuthAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    userAuthSignInAPI: builder.mutation({
      query: (data) => ({
        url: `user/auth/sign-in/`,
        method: "POST",
        body: data.body
      }),
    }),

    userAuthSignUpAPI: builder.mutation({
      query: (data) => ({
        url: `user/auth/sign-up/`,
        method: "POST",
        body: data.body
      }),
    }),

    userAuthSignOutAPI: builder.query({
      query: () => ({
        url: `user/auth/sign-out/`,
        method: "GET",
      }),
    }),

  })
})

export default userAuthAPIEndpoint;
