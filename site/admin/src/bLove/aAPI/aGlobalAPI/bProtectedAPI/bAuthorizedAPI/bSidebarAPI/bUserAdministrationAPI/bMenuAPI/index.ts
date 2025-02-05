import apiConnection from "@/aConnection/cAPIConnection";


const menuAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({

    menuListAPI: builder.query({
      query: () => ({
        url: `menu/list/`,
        method: "GET",
      }),
      providesTags: ["menuList"]
    }),

    menuCreateAPI: builder.mutation({
      query: (data: { body: any }) => ({
        url: `/menu/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["menuList", "menuListForRoleCreateAndUpdate", "roleList", "roleListForUserCreateAndUpdate"]
    }),

    menuRetrieveAPI: builder.query({
      query: (data: { params: any }) => ({
        url: `/menu/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "menuRetrieve", id: data.params._id }
      ]
    }),

    menuUpdateAPI: builder.mutation({
      query: (data: { params: any, body: any }) => ({
        url: `/menu/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any,_error: any, data: { params: any }) => [
        { type: "menuList" },
        { type: "menuListForRoleCreateAndUpdate" },
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "menuRetrieve", id: data.params._id },
        { type: "roleRetrieve" },
        { type: "roleUpdateRetrieve" },
      ]
    }),

    menuDeleteAPI: builder.mutation({
      query: (data: { params: any }) => ({
        url: `/menu/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: { params: any }) => [
        { type: "menuList" },
        { type: "menuListForRoleCreateAndUpdate" },
        { type: "roleList" },
        { type: "roleListForUserCreateAndUpdate" },
        { type: "menuRetrieve", id: data.params._id },
        { type: "roleRetrieve" },
        { type: "roleUpdateRetrieve" },
      ]
    }),

    menuListForRoleCreateAndUpdateAPI: builder.query({
      query: () => ({
        url: `/menu/list-for-role-create-and-update/`,
        method: "GET",
      }),
      providesTags: ["menuListForRoleCreateAndUpdate"]
    }),

  })
})

export default menuAPIEndpoint;
