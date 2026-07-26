import { useState, useEffect } from "react";
import "../../styles/Profile.css";
import { toast } from "react-toastify";
const EditProfileModal = ({
    open,
    onClose,
    profile,
    onSave,
    saving
}) => {

    const [formData, setFormData] = useState({
    fullName:"",
    phone:"",
    address:"",
   
});
   useEffect(() => {

    if(profile){

        setFormData({

            fullName: profile.fullName || "",
            phone: profile.phone || "",
            address: profile.address || ""

        });

    }

},[profile]);

    if (!open) return null;

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();
if (!formData.fullName.trim()) {
    return toast.error("Full name is required.");
}

if (!/^[0-9]{10}$/.test(formData.phone)) {

    return toast.error(
        "Please enter a valid 10-digit phone number."
    );

}
if (!formData.address.trim()) {
    return toast.error("Address is required.");
}
   if (
        formData.fullName === profile.fullName &&
        formData.phone === profile.phone &&
        formData.address === profile.address
    ) {

        toast.info("No changes detected.");

        return;

    }
        onSave(formData);

    };
    const handleClose = () => {

    setFormData({

        fullName: profile?.fullName || "",
        phone: profile?.phone || "",
        address: profile?.address || ""

    });

    onClose();

};

    return (

        <div className="modal-backdrop">

            <div className="edit-profile-modal">

                <h2>Edit Personal Information</h2>
<p className="modal-subtitle">
Update your personal details.
Employment information can only be changed by an administrator.
</p>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>

                    <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    <label>Email</label>



                    <label>Phone</label>

                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label>Address</label>

                    <textarea
                        rows="4"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                   


                    <div className="modal-buttons">

                       <button
    type="button"
    className="cancel-btn"
    onClick={handleClose}
    disabled={saving}
>
    Cancel
</button>
<button
    type="submit"
    className="save-btn"
    disabled={saving}
>
    {saving ? "Saving..." : "Save Changes"}
</button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EditProfileModal;