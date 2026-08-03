import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaBars,
  FaChevronDown,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaKey
} from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileService from "../../services/profileService";
import "../../styles/Navbar.css";
import { SidebarContext } from "../../context/SidebarContext";


const navigate = useNavigate();
const Navbar = () => {

const { searchText, setSearchText } = useContext(SearchContext);

const [profile,setProfile] = useState(null);
const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
const [showMenu, setShowMenu] = useState(false);
useEffect(()=>{

    loadProfile();

},[]);



const loadProfile = async()=>{

    try{

        const response = await profileService.getProfile();

        setProfile(response.data);

    }
    catch(error){

        console.log(error);

    }

};
  return (

    <div className="navbar">
<div
    className="menu-toggle"
    onClick={() => {
        setSidebarOpen(!sidebarOpen);
    }}
>
    <FaBars />
</div>
<div className="company-name">

    EMS Portal

</div>
      {/* Search Box */}
      <div className="search-box">
        <FaSearch className="search-icon" />

 <input
    type="text"
    placeholder="Search employees..."
    value={searchText}
    onChange={(e) => {
       
        setSearchText(e.target.value);
    }}
/>
      </div>

      {/* Right Section */}
      <div className="navbar-right">

        <div className="nav-icon">

    <FaBell />

    <span className="badge">3</span>

</div>

       <div className="nav-icon">

    <FaEnvelope />

    <span className="badge">2</span>

</div>

        <div className="nav-icon">
          <FaMoon />
        </div>

        <div
    className="profile"
    onClick={() => setShowMenu(!showMenu)}
>

    <img
        src={
            profile?.profileImage
                ? `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}/uploads/profile/${profile.profileImage}`
                : `https://ui-avatars.com/api/?name=${profile?.fullName || "User"}&background=0D8ABC&color=fff`
        }
        alt="Profile"
    />

    <div className="profile-info">
        <h4>{profile?.fullName || "Loading..."}</h4>
        <p>{profile?.role || "User"}</p>
    </div>

    <FaChevronDown className="profile-arrow" />

  {showMenu && (

    <div className="profile-dropdown">

        <div
            className="dropdown-item"
            onClick={() => navigate("/profile")}
        >
            <FaUserCircle />
            My Profile
        </div>

        <div
            className="dropdown-item"
            onClick={() => navigate("/settings")}
        >
            <FaCog />
            Settings
        </div>

        <div
            className="dropdown-item"
            onClick={() => navigate("/profile/change-password")}
        >
            <FaKey />
            Change Password
        </div>

        <div
            className="dropdown-item logout"
            onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
            }}
        >
            <FaSignOutAlt />
            Logout
        </div>

    </div>

)}

</div>

      </div>

    </div>
  );
};

export default Navbar;