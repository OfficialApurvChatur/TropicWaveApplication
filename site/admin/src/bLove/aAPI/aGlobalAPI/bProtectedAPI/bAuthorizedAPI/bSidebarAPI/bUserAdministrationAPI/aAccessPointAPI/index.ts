import apiConnection from "@/aConnection/cAPIConnection";


const accessPointAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    accessPointListAPI: builder.query({
      query: () => ({
        url: `access-point/list/`,
        method: "GET",
      }),
      providesTags: ["accessPointList"]
    }),

    accessPointCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/access-point/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["accessPointList", "accessPointListForMenuCreateAndUpdate", "menuList", "menuListForRoleCreateAndUpdate", "roleList", "roleListForUserCreateAndUpdate", "roleListForUserAuthSignUp"]
    }),

    accessPointRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/access-point/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "accessPointRetrieve", id: data.params._id }
      ]
    }),

    accessPointUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/access-point/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "accessPointList" },
        { type: "accessPointListForMenuCreateAndUpdate" },
        { type: "menuList" },
        { type: "menuListForRoleCreateAndUpdate" },
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "roleListForUserAuthSignUp" },
        { type: "accessPointRetrieve", id: data.params._id },
        { type: "menuRetrieve" },
        { type: "roleRetrieve" },
        { type: "roleUpdateRetrieve" },
      ]
    }),

    accessPointDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/access-point/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "accessPointList" },
        { type: "accessPointListForMenuCreateAndUpdate" },
        { type: "menuList" },
        { type: "menuListForRoleCreateAndUpdate" },
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "roleListForUserAuthSignUp" },
        { type: "accessPointRetrieve", id: data.params._id },
        { type: "menuRetrieve" },
        { type: "roleRetrieve" },
        { type: "roleUpdateRetrieve" },
      ]
    }),

    accessPointListForMenuCreateAndUpdateAPI: builder.query({
      query: () => ({
        url: `/access-point/list-for-menu-create-and-update/`,
        method: "GET",
      }),
      providesTags: ["accessPointListForMenuCreateAndUpdate"]
    }),

  })
})

export default accessPointAPIEndpoint;
