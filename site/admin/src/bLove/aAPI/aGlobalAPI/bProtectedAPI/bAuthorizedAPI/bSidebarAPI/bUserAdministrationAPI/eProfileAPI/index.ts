import apiConnection from "@/aConnection/cAPIConnection";


const profileAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    profileListAPI: builder.query({
      query: () => ({
        url: `profile/list/`,
        method: "GET",
      }),
      providesTags: ["profileList", "profileListForUserCreateAndUpdate", "userList", "userListForProfileCreateAndUpdate"]
    }),

    profileCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/profile/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["profileList"]
    }),

    profileRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/profile/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "profileRetrieve", id: data.params._id }
      ]
    }),

    profileUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/profile/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "profileList" },
        { type: "profileListForUserCreateAndUpdate" },
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "profileRetrieve", id: data.params._id },
        { type: "userRetrieve" }
      ]
    }),

    profileDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/profile/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "profileList" },
        { type: "profileListForUserCreateAndUpdate" },
        { type: "userList" },
        { type: "userListForProfileCreateAndUpdate" },
        { type: "profileRetrieve", id: data.params._id },
        { type: "userRetrieve" }
      ]
    }),

    profileListForUserCreateAndUpdateAPI: builder.query({
      query: () => ({
        url: `/profile/list-for-user-create-and-update/`,
        method: "GET",
      }),
      providesTags: ["profileListForUserCreateAndUpdate"]
    }),

  })
})

export default profileAPIEndpoint;
