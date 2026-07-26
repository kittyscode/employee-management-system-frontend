import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

const authService = {

    login(loginData) {
        return axios.post(`${API}/auth/login`, loginData);
    }

};

export default authService;