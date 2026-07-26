import {
    FaEdit,
    FaBuilding,
    FaCircle
} from "react-icons/fa";

import "../../styles/Profile.css";
import ProfilePhoto from "./ProfilePhoto";


const ProfileHeader = ({ profile, setProfile, onEdit }) => {

   


   


    return (

        <div className="profile-header">

            <div className="profile-left">

              <ProfilePhoto
    profile={profile}
    setProfile={setProfile}
    
/>

                <div className="profile-details">

                    <h1>{profile.fullName}</h1>

                    <p>{profile.designation || "Not Assigned"}</p>

                    <div className="profile-badges">

                        <span className="department-badge">

                            <FaBuilding />

                       {profile.department || "No Department"}

                        </span>


                        <span
    className={`status-badge ${profile.status?.toLowerCase()}`}
>
    <FaCircle />
   {profile.status || "Unknown"}
</span>

                            


                    </div>


                </div>


            </div>

<button
    className="edit-profile-btn"
    onClick={onEdit}
    aria-label="Edit Profile"
    disabled={!profile}
>
    <FaEdit />
    Edit Profile
</button>

        </div>

    );

};

export default ProfileHeader;