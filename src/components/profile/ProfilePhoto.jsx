import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import "../../styles/Profile.css";


const ProfilePhoto = ({ profile, setProfile }) => {


  const [preview, setPreview] = useState(
    profile?.profileImage
        ? `${import.meta.env.VITE_API_BASE_URL}/uploads/profile/${profile.profileImage}`
        : null
);

    const uploadImage = async(e)=>{


        const file = e.target.files[0];


        if(!file){
            return;
        }


        const formData = new FormData();

        formData.append(
            "file",
            file
        );



        try{


            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/profile/upload-image`,
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

         setPreview(`${import.meta.env.VITE_API_BASE_URL}/uploads/profile/${response.data.imageUrl}`);



            const updatedProfile = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/profile`,
    {
        headers:{
            Authorization:
            `Bearer ${localStorage.getItem("token")}`
        }
    }
);


setProfile(updatedProfile.data);


        }
        catch(error){

            console.error(
                "Image upload failed",
                error
            );

        }


    };



    return (

        <div className="profile-photo-wrapper">


            <img

               src={
    preview
        ? preview
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.fullName)}&background=random`
}

                className="profile-photo"

                alt="profile"

            />



            <label className="camera-btn">


                <FaCamera />


                <input

                    type="file"

                    accept="image/*"

                    onChange={uploadImage}

                    hidden

                />


            </label>



        </div>


    );

};


export default ProfilePhoto;