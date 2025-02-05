import apiConnection from "@/aConnection/cAPIConnection";


const roleAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    roleListAPI: builder.query({
      query: () => ({
        url: `role/list/`,
        method: "GET",
      }),
      providesTags: ["roleList"]
    }),

    roleCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/role/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["roleList", "roleListForUserCreateAndUpdate", "roleListForUserAuthSignUp", "userList", "userListForProfileCreateAndUpdate"]
    }),

    roleRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/role/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "roleRetrieve", id: data.params._id }
      ]
    }),

    roleUpdateRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/role/update-retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "roleUpdateRetrieve", id: data.params._id }
      ]
    }),

    roleUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/role/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "roleListForUserAuthSignUp" },
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "roleRetrieve", id: data.params._id },
        { type: "roleUpdateRetrieve", id: data.params._id },
        { type: "userRetrieve" }
      ]
    }),

    roleDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/role/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "roleListForUserAuthSignUp" },
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "roleRetrieve", id: data.params._id },
        { type: "roleUpdateRetrieve", id: data.params._id },
        { type: "userRetrieve" }
      ]
    }),

    roleListForUserCreateAndUpdateAPI: builder.query({
      query: () => ({
        url: `/role/list-for-user-create-and-update/`,
        method: "GET",
      }),
      providesTags: ["roleListForUserCreateAndUpdate"]
    }),

    roleListForUserAuthSignUpAPI: builder.query({
      query: () => ({
        url: `/role/list-for-user-auth-sign-up/`,
        method: "GET",
      }),
      providesTags: ["roleListForUserAuthSignUp"]
    }),

  })
})

export default roleAPIEndpoint;
