import {
    FaUserShield,
    FaUser,
    FaClock,
    FaCheckCircle,
    FaCalendar
} from "react-icons/fa";

import "../../styles/Profile.css";

const AccountInfoCard = ({ profile }) => {

    return (

        <div className="profile-card">

            <div className="card-header">
                <h2>Account Information</h2>
            </div>

            <div className="info-list">

                <div className="info-row">
                    <FaUser className="info-icon" />
                    <div>
                        <span className="info-label">Username</span>
                        <p>{profile.username}</p>
                    </div>
                </div>

                <div className="info-row">
                    <FaUserShield className="info-icon" />
                    <div>
                        <span className="info-label">Role</span>
                        <p>{profile.role}</p>
                    </div>
                </div>

                <div className="info-row">
                    <FaCheckCircle className="info-icon" />
                    <div>
                        <span className="info-label">Account Status</span>
                        <p>{profile.status}</p>
                    </div>
                </div>

                <div className="info-row">
                    <FaCalendar className="info-icon" />
                    <div>
                        <span className="info-label">Created On</span>
                        <p>{profile.createdDate}</p>
                    </div>
                </div>

                <div className="info-row">
                    <FaClock className="info-icon" />
                    <div>
                        <span className="info-label">Last Login</span>
                        <p>{profile.lastLogin}</p>
                    </div>
                </div>

            </div>

        </div>

    );

};

export default AccountInfoCard;