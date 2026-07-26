import axios from "axios";

const API_URL = "http://localhost:8082/api/departments";

const getAllDepartments = () => axios.get(API_URL);

const getDepartmentById = (id) => axios.get(`${API_URL}/${id}`);

const createDepartment = (department) => axios.post(API_URL, department);

const updateDepartment = (id, department) =>
  axios.put(`${API_URL}/${id}`, department);

const deleteDepartment = (id) =>
  axios.delete(`${API_URL}/${id}`);

export default {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
 searchDepartments(keyword) {
    return axios.get(
        `${API_URL}/search?keyword=${keyword}`
    );
},
};
