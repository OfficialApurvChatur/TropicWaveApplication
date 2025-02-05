import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: (
      import.meta.env.VITE_ENVIRONMENT === "Production" ? String(import.meta.env.VITE_BACKEND_URL) : 
      import.meta.env.VITE_ENVIRONMENT === "Testing" ? String(import.meta.env.VITE_BACKEND_URL) :
      import.meta.env.VITE_ENVIRONMENT === "Development" ? String(import.meta.env.VITE_BACKEND_URL) : 
      String(import.meta.env.VITE_BACKEND_URL)
    ),
    credentials: "include"
  }),
  tagTypes: [
    "baseList", "baseRetrieve",

    "accessPointList", "accessPointRetrieve", "accessPointListForMenuCreateAndUpdate",
    "menuList", "menuRetrieve", "menuListForRoleCreateAndUpdate",
    "roleList", "roleRetrieve", "roleListForUserCreateAndUpdate", "roleListForUserAuthSignUp", "roleUpdateRetrieve",
    "userList", "userRetrieve", "userListForProfileCreateAndUpdate",
    "profileList", "profileRetrieve", "profileListForUserCreateAndUpdate",
  ],
  endpoints: () => ({})
})

export default apiConnection;
