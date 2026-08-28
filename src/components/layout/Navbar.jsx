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

import { useEffect, useState ,useRef} from "react";
import { NotificationContext } from "../../context/NotificationContext";
import profileService from "../../services/profileService";
import "../../styles/Navbar.css";
import { SidebarContext } from "../../context/SidebarContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate();
  const { searchText, setSearchText } =
        useContext(SearchContext);

    const { sidebarOpen, setSidebarOpen } =
        useContext(SidebarContext);
const [profile,setProfile] = useState(null);

const [showMenu, setShowMenu] = useState(false);
const profileRef = useRef(null);
useEffect(() => {
    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
useEffect(()=>{

    loadProfile();

},[]);

const {
    notifications,
    messages,
    unreadNotifications,
    unreadMessages,
    fetchNotifications,
    fetchMessages,
    markNotificationRead,
    markAllNotificationsRead,
    markMessageRead,
    markAllMessagesRead
} = useContext(NotificationContext);

const [showNotifPanel, setShowNotifPanel] = useState(false);
const [showMsgPanel, setShowMsgPanel] = useState(false);
const notifRef = useRef(null);
const msgRef = useRef(null);
useEffect(() => {
    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShowMenu(false);
        }
        if (notifRef.current && !notifRef.current.contains(event.target)) {
            setShowNotifPanel(false);
        }
        if (msgRef.current && !msgRef.current.contains(event.target)) {
            setShowMsgPanel(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
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
    placeholder="Search employees..."
    value={searchText}
    onChange={(e) => {
       
        setSearchText(e.target.value);
    }}
/>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
<div className="nav-icon" ref={notifRef}>
    <div
        onClick={() => {
            setShowNotifPanel(!showNotifPanel);
            setShowMsgPanel(false);
            if (!showNotifPanel) fetchNotifications();
        }}
    >
        <FaBell />
        {unreadNotifications > 0 && (
            <span className="badge">{unreadNotifications}</span>
        )}
    </div>

    {showNotifPanel && (
        <div className="dropdown-panel">
            <div className="dropdown-panel-header">
                <h4>Notifications</h4>
                <span onClick={markAllNotificationsRead}>Mark all read</span>
            </div>

            {notifications.length === 0 ? (
                <p className="empty-state">No notifications</p>
            ) : (
                notifications.map((n) => (
                    <div
                        key={n.id}
                        className={`dropdown-panel-item ${n.read ? "" : "unread"}`}
                        onClick={() => markNotificationRead(n.id)}
                    >
                        <p>{n.message}</p>
                        <span className="time">
                            {new Date(n.createdAt).toLocaleString()}
                        </span>
                    </div>
                ))
            )}
        </div>
    )}
</div>

<div className="nav-icon" ref={msgRef}>
    <div
        onClick={() => {
            setShowMsgPanel(!showMsgPanel);
            setShowNotifPanel(false);
            if (!showMsgPanel) fetchMessages();
        }}
    >
        <FaEnvelope />
        {unreadMessages > 0 && (
            <span className="badge">{unreadMessages}</span>
        )}
    </div>

    {showMsgPanel && (
        <div className="dropdown-panel">
            <div className="dropdown-panel-header">
                <h4>Messages</h4>
                <span onClick={markAllMessagesRead}>Mark all read</span>
            </div>

            {messages.length === 0 ? (
                <p className="empty-state">No messages</p>
            ) : (
                messages.map((m) => (
                    <div
                        key={m.id}
                        className={`dropdown-panel-item ${m.read ? "" : "unread"}`}
                        onClick={() => markMessageRead(m.id)}
                    >
                        <p className="subject">{m.subject}</p>
                        <span className="time">
                            {new Date(m.sentAt).toLocaleString()}
                        </span>
                    </div>
                ))
            )}
        </div>
    )}
</div>

        <div className="nav-icon">
          <FaMoon />
        </div>

     <div
    className="profile"
    ref={profileRef}
    onClick={() => setShowMenu(!showMenu)}
>

   <img
    src={
        profile?.profileImage
            ? `${import.meta.env.VITE_API_BASE_URL}/uploads/profile/${profile.profileImage}`
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