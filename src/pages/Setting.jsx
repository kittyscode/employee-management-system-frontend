import { useState } from "react";
import "../styles/setting.css";
import ChangePasswordModal from "../components/settings/ChangePasswordModal";
import ThemeModal from "../components/settings/ThemeModal";
import { toast } from "react-toastify";
import profileService from "../services/profileService";

const Settings = () => {

    const [passwordOpen,setPasswordOpen] = useState(false);

    const [notifications,setNotifications] = useState(true);
    const [themeOpen,setThemeOpen] = useState(false);
const handlePasswordChange = async (passwordData) => {

    try {

        await profileService.changePassword(passwordData);

        toast.success("Password changed successfully.");

        setPasswordOpen(false);

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Failed to change password."
        );

        console.error(error);

    }

};
    return (

        <div className="settings-page">


           <h1>Application Settings</h1>

<p className="settings-subtitle">
    Manage your account preferences and security.
</p>


            <div className="settings-grid">


                <div className="settings-card">


                    <h2>Security</h2>

                    <p>
    Update your account password to keep your account secure.
</p>


                    <button
                    onClick={()=>setPasswordOpen(true)}
                    >
                        Change Password
                    </button>


                </div>



                <div className="settings-card">


                    <h2>Email Notifications</h2>


                    <p>
                        Manage notification preferences.
                    </p>


                  <div className="notification-actions">

    <button
        onClick={() => setNotifications(!notifications)}
    >
        {notifications ? "Turn Off" : "Turn On"}
    </button>

    <span
        className={`status ${
            notifications ? "enabled" : "disabled"
        }`}
    >
        {notifications ? "Enabled" : "Disabled"}
    </span>

</div>


                </div>




               <div className="settings-card">


    <h2>Theme</h2>


    <p>
        Customize application appearance.
    </p>


    <button
    onClick={()=>setThemeOpen(true)}
    >

    Customize

    </button>


</div>


            </div>



          <ChangePasswordModal
    open={passwordOpen}
    onClose={() => setPasswordOpen(false)}
    onSave={handlePasswordChange}
/>

<ThemeModal

open={themeOpen}

onClose={()=>setThemeOpen(false)}

/>

        </div>

    );

};


export default Settings;