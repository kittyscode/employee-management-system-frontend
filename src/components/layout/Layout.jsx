import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/layout.css";

const Layout = ({ children }) => {

    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

    return (
        <>

            <div className="app">

                <Sidebar />

                <div className="main-section">

                    <Navbar />

                    <div className="page-content">
                        {children}
                    </div>

                </div>

            </div>

            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

        </>
    );
};

export default Layout;