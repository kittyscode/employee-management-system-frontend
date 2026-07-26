import { useEffect, useState } from "react";
import "../styles/Profile.css";

import profileService from "../services/profileService";
import { toast } from "react-toastify";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStatus from "../components/profile/ProfileStatus";
import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import ProfessionalInfoCard from "../components/profile/ProfessionalInfoCard";
import SalaryCard from "../components/profile/SalaryCard";
import AccountInfoCard from "../components/profile/AccountInfoCard";
import EditProfileModal from "../components/profile/EditProfileModal";
import Loader from "../components/common/Loader";
const Profile = () => {
const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    useEffect(() => {
        loadProfile();
    }, []);

  const loadProfile = async () => {

    try {

        const response = await profileService.getProfile();

        setProfile(response.data);

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Unable to load profile."
        );

    } finally {

        setLoading(false);

    }


    };
    
    
if (loading) {
    return <Loader text="Loading Profile..." />;
}
const handleSave = async (updatedProfile) => {

    try {

        setSaving(true);

        const response =
            await profileService.updateProfile(updatedProfile);

        setProfile(response.data);

        toast.success("Profile updated successfully.");

        setEditOpen(false);

    }
    catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Failed to update profile."
        );

        console.error("Update Profile Error:", error);

    }
    finally {

        setSaving(false);

    }

};

   if (!profile) {

    return (
        <div className="profile-loading">
            <h2>Unable to load profile.</h2>

            <p>Please refresh the page or login again.</p>
        </div>
    );
    

}

    return (
        <div className="profile-page">

        <ProfileHeader
    profile={profile}
    setProfile={setProfile}
    onEdit={() => setEditOpen(true)}
/>
            <ProfileStatus profile={profile} />

            <div className="profile-grid">

                <div className="left-column">
                    <PersonalInfoCard profile={profile} />
                    <ProfessionalInfoCard profile={profile} />
                </div>

                <div className="right-column">

    <SalaryCard profile={profile} />

    <AccountInfoCard profile={profile} />

    

</div>

            </div>

         <EditProfileModal
    open={editOpen}
    profile={profile}
    onClose={() => setEditOpen(false)}
    onSave={handleSave}
    saving={saving}
/>

        </div>
        
    );
};

export default Profile;