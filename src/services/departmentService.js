
import api from "./api";

const getAllDepartments = () =>
    api.get(`/departments`);


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