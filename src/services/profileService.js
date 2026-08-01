import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/profile`;
// const API_URL = `${import.meta.env.VITE_API_BASE_URL}/departments`;

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});



const getProfile = () => {

    return axios.get(
        API_URL,
        authHeader()
    );

};



const updateProfile = (data) => {

    return axios.put(
        API_URL,
        data,
        authHeader()
    );

};



const changePassword = (data) => {

    return axios.put(
        API_URL + "/change-password",
        data,
        authHeader()
    );

};



const uploadProfileImage = (file) => {

    const formData = new FormData();


    formData.append(
        "file",
        file
    );


    return axios.post(
        API_URL + "/upload-image",
        formData,
        {
            headers:{
                Authorization:
                `Bearer ${localStorage.getItem("token")}`,

                "Content-Type":
                "multipart/form-data"
            }
        }
        
    );
    

};



export default {

    getProfile,
    updateProfile,
    changePassword,
    uploadProfileImage

};