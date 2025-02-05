import apiConnection from "@/aConnection/cAPIConnection";


const userAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    userListAPI: builder.query({
      query: () => ({
        url: `user/list/`,
        method: "GET",
      }),
      providesTags: ["userList"]
    }),

    userCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/user/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["userList", "userListForProfileCreateAndUpdate", "profileList", "profileListForUserCreateAndUpdate"]
    }),

    userRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/user/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "userRetrieve", id: data.params._id }
      ]
    }),

    userUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/user/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "profileList" },
        { type: "profileListForUserCreateAndUpdate" },
        { type: "userRetrieve", id: data.params._id },
        { type: "profileRetrieve" }
      ]
    }),

    userDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/user/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "profileList" },
        { type: "profileListForUserCreateAndUpdate" },
        { type: "userRetrieve", id: data.params._id },
        { type: "profileRetrieve" }
      ]
    }),

    userListForProfileCreateAndUpdateAPI: builder.query({
      query: () => ({
        url: `/user/list-for-profile-create-and-update/`,
        method: "GET",
      }),
      providesTags: ["userListForProfileCreateAndUpdate"]
    }),

  })
})

export default userAPIEndpoint;
