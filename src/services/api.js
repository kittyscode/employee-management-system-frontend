// import axios from "axios";

// const api = axios.create({

//     // baseURL: "${import.meta.env.VITE_API_BASE_URL}/api",

//     baseURL: "employee-management-system-production-af73.up.railway.app/api",

//     headers: {
//         "Content-Type": "application/json",
//     },

// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;