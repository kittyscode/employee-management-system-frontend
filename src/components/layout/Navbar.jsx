import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaBars
} from "react-icons/fa";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

import { useEffect, useState } from "react";
import profileService from "../../services/profileService";
import "../../styles/Navbar.css";
import { SidebarContext } from "../../context/SidebarContext";
const Navbar = () => {

const { searchText, setSearchText } = useContext(SearchContext);

const [profile,setProfile] = useState(null);
const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

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
      {/* Search Box */}
      <div className="search-box">
        <FaSearch className="search-icon" />

 <input
    type="text"
    placeholder="Search..."
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
        </div>

        <div className="nav-icon">
          <FaEnvelope />
        </div>

        <div className="nav-icon">
          <FaMoon />
        </div>

        <div className="profile">

          <img

src={
 profile?.profileImage
 ?
`http://localhost:8082/uploads/profile/${profile.profileImage}`
 :
 `https://ui-avatars.com/api/?name=${profile?.fullName || "User"}`
}
alt="Profile"

/>

         <h4>
{
profile?.fullName || "Loading..."
}
</h4>


<p>
{
profile?.role || "User"
}
</p>

        </div>

      </div>

    </div>
  );
};

export default Navbar;