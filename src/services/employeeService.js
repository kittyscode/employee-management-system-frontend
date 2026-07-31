import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/employees`;

const employeeService = {

    getAllEmployees() {
        return axios.get(BASE_URL);
    },
    getEmployees(page = 0, size = 5) {
        return axios.get(`${BASE_URL}?page=${page}&size=${size}`);
    },

    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    },


    createEmployee(employee) {
        return axios.post(BASE_URL, employee);
    },


    updateEmployee(id, employee) {
        return axios.put(`${BASE_URL}/${id}`, employee);
    },


    deleteEmployee(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    },


    exportEmployees() {
        return axios.get(
            `${BASE_URL}/export`,
            {
                responseType: "blob",

                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("token")
                }
            }
        );
    },

   searchEmployees(keyword) {
    return axios.get(`${BASE_URL}/search?keyword=${keyword}`);
}

};

export default employeeService;
// import api from "./api";

// const employeeService = {

//     getAllEmployees() {
//         return api.get("/employees");
//     },

//     getEmployees(page = 0, size = 5) {
//         return api.get(`/employees?page=${page}&size=${size}`);
//     },

//     getEmployeeById(id) {
//         return api.get(`/employees/${id}`);
//     },

//     createEmployee(employee) {
//         return api.post("/employees", employee);
//     },

//     updateEmployee(id, employee) {
//         return api.put(`/employees/${id}`, employee);
//     },

//     deleteEmployee(id) {
//         return api.delete(`/employees/${id}`);
//     },

//     exportEmployees() {
//         return api.get(`/employees/export`, {
//             responseType: "blob",
//         });
//     },

//     searchEmployees(keyword) {
//         return api.get(`/employees/search?keyword=${keyword}`);
//     },

// };

// export default employeeService;