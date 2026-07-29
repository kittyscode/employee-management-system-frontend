// import axios from "axios";

// // const API_URL = "${import.meta.env.VITE_API_BASE_URL}E_API_BASE_URL}/api/departments";
// const API_URL = `${import.meta.env.VITE_API_BASE_URL}/departments`;

// const getAllDepartments = () => axios.get(API_URL);

// const getDepartmentById = (id) => axios.get(`${API_URL}/${id}`);

// const createDepartment = (department) => axios.post(API_URL, department);

// const updateDepartment = (id, department) =>
//   axios.put(`${API_URL}/${id}`, department);

// const deleteDepartment = (id) =>
//   axios.delete(`${API_URL}/${id}`);

// export default {
//   getAllDepartments,
//   getDepartmentById,
//   createDepartment,
//   updateDepartment,
//   deleteDepartment,
//  searchDepartments(keyword) {
//     return axios.get(
//         `${API_URL}/search?keyword=${keyword}`
//     );
// },
// };

import api from "./api";

const getAllDepartments = () =>
    api.get("/departments");


const getDepartmentById = (id) =>
    api.get(`/departments/${id}`);


const createDepartment = (department) =>
    api.post("/departments", department);


const updateDepartment = (id, department) =>
    api.put(`/departments/${id}`, department);


const deleteDepartment = (id) =>
    api.delete(`/departments/${id}`);


const searchDepartments = (keyword) =>
    api.get(`/departments/search?keyword=${keyword}`);


export default {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    searchDepartments,
};