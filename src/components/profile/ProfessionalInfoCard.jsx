import {
    FaIdBadge,
    FaBriefcase,
    FaBuilding,
    FaCalendarAlt
} from "react-icons/fa";

import "../../styles/Profile.css";

const ProfessionalInfoCard = ({ profile }) => {

    return (

        <div className="profile-card">

            <h2>Professional Information</h2>

            <div className="info-row">

                <FaIdBadge className="info-icon" />

                <div>

                    <label>Employee ID</label>

                    <p>{profile.employeeId}</p>

                </div>

            </div>

            <div className="info-row">

                <FaBriefcase className="info-icon" />

                <div>

                    <label>Designation</label>

                    <p>{profile.designation}</p>

                </div>

            </div>

            <div className="info-row">

                <FaBuilding className="info-icon" />

                <div>

                    <label>Department</label>

                    <p>{profile.department}</p>

                </div>

            </div>

            <div className="info-row">

                <FaCalendarAlt className="info-icon" />

                <div>

                    <label>Joining Date</label>

                    <p>{profile.joiningDate}</p>

                </div>

            </div>

        </div>

    );

};

export default ProfessionalInfoCard;