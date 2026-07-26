import {
    FaMoneyBillWave,
    FaCoins,
    FaAward
} from "react-icons/fa";

import "../../styles/Profile.css";

const SalaryCard = ({ profile }) => {

    return (

        <div className="profile-card">

            <h2>Salary Details</h2>

            <div className="info-row">

                <FaMoneyBillWave className="info-icon" />

                <div>

                    <label>Salary</label>

                    <p>₹ {profile.salary}</p>

                </div>

            </div>

            <div className="info-row">

                <FaCoins className="info-icon" />

                <div>

                    <label>Status</label>

                    <p>{profile.status}</p>

                </div>

            </div>

            <div className="info-row">

                <FaAward className="info-icon" />

                <div>

                    <label>Role</label>

                    <p>{profile.role}</p>

                </div>

            </div>

        </div>

    );

};

export default SalaryCard;