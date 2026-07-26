import { FaLock } from "react-icons/fa";
import "../../styles/Profile.css";

const SecurityCard = ({ onChangePassword }) => {

    return (

        <div className="profile-card">

            <h2>Security</h2>

            <div className="info-row">

                <FaLock className="info-icon" />

                <div>

                    <label>Password</label>

                    <p>••••••••••••</p>

                </div>

            </div>

            <div className="security-actions">

                <button
                    className="change-password-btn"
                    onClick={onChangePassword}
                >
                    Change Password
                </button>

            </div>

        </div>

    );

};

export default SecurityCard;