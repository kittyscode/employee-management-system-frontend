// import StatCard from "../components/dashboard/StartCard";
// import EmployeeChart from "../components/dashboard/EmployeeChart";
// import DepartmentChart from "../components/dashboard/DepartmentChart";
// import RecentEmployeeTable from "../components/dashboard/RecentEmployeeTable";

// import "../styles/Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard">

//       {/* Header */}
//       <div className="dashboard-header">
//         <h1>Dashboard</h1>
//         <p>Welcome back! Here's an overview of your organization.</p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="stats-grid">
//         <StatCard
//           title="Total Employees"
//           value="150"
//           change="+12%"
//         />

//         <StatCard
//           title="Departments"
//           value="8"
//           change="+2"
//         />

//         <StatCard
//           title="Active Employees"
//           value="142"
//           change="+5%"
//         />

//         <StatCard
//           title="Monthly Payroll"
//           value="₹12.5L"
//           change="+8%"
//         />
//       </div>

//       {/* Charts Section */}
//       <div className="charts-grid">
//         <EmployeeChart />
//         <DepartmentChart />
//       </div>

//       {/* Recent Employees */}
//       <div className="table-section">
//         <RecentEmployeeTable />
//       </div>

//     </div>
//   );
// }

// export default Dashboard;

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