import axios from "axios";

const API_URL = "http://localhost:8082/api/profile";


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