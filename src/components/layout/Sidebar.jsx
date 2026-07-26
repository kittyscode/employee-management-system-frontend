
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaChartBar,
  FaCog,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom"
import { useContext,  useEffect } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import "../../styles/Sidebar.css";

const Sidebar = () => {

const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

const handleNavigate = (path) => {

    if (window.innerWidth <= 768) {
        setSidebarOpen(false);
    }

    navigate(path);
};

const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    if (window.innerWidth <= 768) {
        setSidebarOpen(false);
    }

    navigate("/");
};
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {

  
    if(window.innerWidth <= 768){
        setSidebarOpen(false);
    }

}, [location.pathname]);
useEffect(() => {

}, [sidebarOpen]);

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

      <div className="logo-section">

    <div className="logo-icon">
        <FaUsers />
    </div>

    <div className="logo-text">
        <h2>EMS</h2>
        <p>Employee Management</p>
    </div>

</div>

      <div className="menu-section">
        <h4>MAIN</h4>

        <div
  className={`menu-item ${location.pathname === "/dashboard" ? "active" : ""}`}
  onClick={() => handleNavigate("/dashboard")}
>
  <FaHome />
  <span>Dashboard</span>
</div>

        <div
className={`menu-item ${
location.pathname === "/employees" ? "active" : ""
}`}
onClick={() => handleNavigate("/employees")}
>
          <FaUsers />
          <span>Employees</span>
        </div>

        <div
className={`menu-item ${
location.pathname === "/departments" ? "active" : ""
}`}
        onClick={()=>{handleNavigate("/departments")}}>
          <FaBuilding />
          <span>Departments</span>
        </div>

       <div
className={`menu-item ${
location.pathname === "/reports" ? "active" : ""
}`}
        onClick={()=>{handleNavigate("/reports")}}>
          <FaChartBar />
          <span>Reports</span>
        </div>
      </div>

      <div className="menu-section">
        <h4>SETTINGS</h4>

    <div
    className={`menu-item ${
        location.pathname === "/settings" ? "active" : ""
    }`}
    onClick={() => handleNavigate("/settings")}
>
    <FaCog />
    <span>Settings</span>
</div>

   <div
  className={`menu-item ${location.pathname === "/profile" ? "active" : ""}`}
  onClick={() => handleNavigate("/profile")}
>
  <FaUser />
  <span>Profile</span>
</div>
       <div
    className="menu-item"
    onClick={handleLogout}
>
    <FaSignOutAlt />
    <span>Logout</span>
</div>
      </div>

    </div>
  );
};

export default Sidebar;