import { FaUsers, FaBuilding, FaUserTie } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import RecentEmployeeTable from "../components/dashboard/RecentEmployeeTable";
import StartCard from "../components/dashboard/StartCard";
import QuickActions from "../components/dashboard/QuickAction";
import "../styles/Dashboard.css";
function Dashboard() {
  

  return (
    <div className="dashboard">
       <h1 className=" dashboard-title">Dashboard</h1>
      <div className="kpi-section">
       
        <StartCard
          icon={<FaUsers />}
          title="Total Employees"
          value="100"
          growth="+12% this month"
        />

        <StartCard
          icon={<FaBuilding />}
          title="Total Departments"
          value="10"
          growth="+5% this month"
        />

        <StartCard
          icon={<FaUserTie />}
          title="Active Employees"
          value="85"
          growth="+10% this month"
        />

        <StartCard
          icon={<FaIndianRupeeSign />}
          title="Total Payroll"
          value="₹2.5L"
          growth="+15% this month"
        />
        </div>

      <div className="dashboard-content">

        <div className="employees-section">
          <RecentEmployeeTable />
        </div>

        <div className="actions-section">
          <QuickActions />
        </div>

      </div>

    </div>
    
  );
}

export default Dashboard;