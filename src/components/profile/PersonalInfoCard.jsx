import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaUser
} from "react-icons/fa";

import "../../styles/Profile.css";

const PersonalInfoCard = ({ profile }) => {

    return (

        <div className="profile-card">

            <h2>Personal Information</h2>

            <div className="info-row">

                <FaUser className="info-icon" />

                <div>

                    <label>Full Name</label>

                    <p>{profile.fullName}</p>

                </div>

            </div>

            <div className="info-row">

                <FaEnvelope className="info-icon" />

                <div>

                    <label>Email</label>

                    <p>{profile.email}</p>

                </div>

            </div>

            <div className="info-row">

                <FaPhone className="info-icon" />

                <div>

                    <label>Phone</label>

                    <p>{profile.phone}</p>

                </div>

            </div>

            <div className="info-row">

                <FaMapMarkerAlt className="info-icon" />

                <div>

                    <label>Address</label>

                    <p>{profile.address}</p>

                </div>

            </div>

        </div>

    );

};

export default PersonalInfoCard;