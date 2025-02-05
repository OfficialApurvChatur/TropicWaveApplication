const baseURL = import.meta.env.VITE_ENVIRONMENT === "Production" ? 
  "" : 
  "http://localhost:8080/api/v1"

export default baseURL;
