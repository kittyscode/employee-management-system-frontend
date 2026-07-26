import { useState } from "react";
import "../../styles/Profile.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
const ChangePasswordModal = ({
    open,
    onClose,
    onSave
}) => {
const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
});

const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
});
const [loading, setLoading] = useState(false);

    if (!open) return null;
    const resetForm = () => {

    setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    setShowPassword({
        current: false,
        new: false,
        confirm: false
    });

};
const handleSubmit = async() => {

    if (!formData.currentPassword.trim()) {
        toast.error("Current password is required.");
        return;
    }

    if (!formData.newPassword.trim()) {
         toast.error("New password is required.");
        return;
    }

    if (!formData.confirmPassword.trim()) {
         toast.error("Confirm password is required.");
        return;
    }

    if (formData.currentPassword === formData.newPassword) {
         toast.error("New password cannot be the same as your current password.");
        return;
    }

    if (formData.newPassword.length < 8) {
         toast.error("Password must contain at least 8 characters.");
        return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
         toast.error("New password and confirm password do not match.");
        return;
    }

    try {

    setLoading(true);

    await onSave(formData);

    resetForm();

}
finally {

    setLoading(false);

}
};

const handleChange = (e) => {

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });

};


    return (

        <div className="modal-backdrop">

            <div className="change-password-modal">

                <div className="modal-header">

                    <h2>Change Password</h2>

                    <button
                        className="close-btn"
                        onClick={() => {
    resetForm();
    onClose();
}}
                    >
                        ×
                    </button>

                </div>

                <div className="modal-body">
            <label>Current Password</label>
<div className="password-field">

    <input
        type={showPassword.current ? "text" : "password"}
        name="currentPassword"
        value={formData.currentPassword}
        onChange={handleChange}
    />

    <button
        type="button"
        className="toggle-password"
        onClick={() =>
            setShowPassword({
                ...showPassword,
                current: !showPassword.current
            })
        }
    >
        {showPassword.current ? <FaEyeSlash /> : <FaEye />}
    </button>

</div>


<label>New Password</label>

<div className="password-field">

    <input
        type={showPassword.new ? "text" : "password"}
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
    />

    <button
        type="button"
        className="toggle-password"
        onClick={() =>
            setShowPassword({
                ...showPassword,
                new: !showPassword.new
            })
        }
    >
        {showPassword.new ? <FaEyeSlash /> : <FaEye />}
    </button>

</div>
<label>Confirm Password</label>

<div className="password-field">

    <input
        type={showPassword.confirm ? "text" : "password"}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
    />

    <button
        type="button"
        className="toggle-password"
        onClick={() =>
            setShowPassword({
                ...showPassword,
                confirm: !showPassword.confirm
            })
        }
    >
        {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
    </button>

</div>
<div className="modal-buttons">

   <button
    className="cancel-btn"
    type="button"
    onClick={() => {
        resetForm();
        onClose();
    }}
>Cancel
    </button>

 <button
    className="save-btn"
    type="button"
    onClick={handleSubmit}
    disabled={loading}
>
    {loading ? "Updating..." : "Update Password"}
</button>
</div>
                </div>

            </div>

        </div>

    );

};

export default ChangePasswordModal;