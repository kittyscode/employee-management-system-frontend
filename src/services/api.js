import axios from "axios";

const api = axios.create({

    // baseURL: "http://localhost:8082/api",

    baseURL: "employee-management-system-production-af73.up.railway.app",

    headers: {
        "Content-Type": "application/json",
    },

});

export default api;