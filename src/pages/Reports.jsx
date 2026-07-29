import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Report.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { LabelList } from "recharts";
import {
  FaUsers,
  FaBuilding,
  FaUserCheck,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const Report = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  
  const [selectedDepartment, setSelectedDepartment] = useState("");
  
  const [selectedStatus, setSelectedStatus] = useState("");

  const { searchText } = useContext(SearchContext);
  useEffect(() => {
    fetchReport();
  }, []);

const fetchReport = async () => {
  try {
    setLoading(true);

    const reportResponse = await axios.get(
      "${import.meta.env.VITE_API_BASE_URL}/api/reports/dashboard"
    );

    const employeeResponse = await axios.get(
      "${import.meta.env.VITE_API_BASE_URL}/api/employees"
    );

    const departmentResponse = await axios.get(
      "${import.meta.env.VITE_API_BASE_URL}/api/departments"
    );

  

    // IMPORTANT
    setReport(reportResponse.data);

    // because /api/employees returns Page<Employee>
    setEmployees(employeeResponse.data.content);

    setDepartments(departmentResponse.data);

  } catch (err) {
    console.log(err.response);
  } finally {
    setLoading(false);
  }
};
  const handleReset = () => {
    setSelectedDepartment("");
    setSelectedStatus("");
};

  const handleExport = () => {
  const data = filteredEmployees.map((employee) => ({
    ID: employee.id,
    Name: employee.name,
    Email: employee.email,
    Department: employee.department?.departmentName,
    Salary: employee.salary,
    Status: employee.status,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Employees"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(file, "Employee_Report.xlsx");
};
  const filteredEmployees = employees.filter((employee) => {

    const matchSearch =
        employee.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||

        employee.email
            .toLowerCase()
            .includes(searchText.toLowerCase());

    const matchDepartment =
        selectedDepartment === "" ||
        employee.department?.departmentName === selectedDepartment;

    const matchStatus =
        selectedStatus === "" ||
        employee.status === selectedStatus;

    return matchSearch && matchDepartment && matchStatus;

});

  if (loading) {
    return <h2 className="loading">Loading Dashboard...</h2>;
  }
 
const departmentChartData = departments.map((department) => ({
  name: department.departmentName,
  employees: employees.filter(
    (emp) => emp.department?.id === department.id
  ).length,
}));

const statusChartData = [
  {
    name: "Active",
    value: employees.filter((e) => e.status === "Active").length,
  },
  {
    name: "Inactive",
    value: employees.filter((e) => e.status === "Inactive").length,
  },
];

const COLORS = ["#22c55e", "#ef4444"];
  return (
    <div className="report-container">

      {/* Header */}

      <div className="reports-header">

        <div>
          <h1 className="page-title">Reports Dashboard</h1>
          <p className="page-subtitle">
            Monitor employees, departments and payroll.
          </p>
        </div>

        <div className="header-buttons">

          <button
            className="refresh-btn"
            onClick={fetchReport}
          >
            Refresh
          </button>

          <button
            className="export-btn"
            onClick={handleExport}
          >
            Export
          </button>

        </div>

      </div>

      {/* Dashboard Cards */}

      <div className="card-container">

        <div className="card employees">

          <div className="card-icon employees-icon">
            <FaUsers />
          </div>

          <div className="card-content">
            <h3>Total Employees</h3>
            <p>{report?.totalEmployees}</p>
          </div>

        </div>

        <div className="card departments">

          <div className="card-icon departments-icon">
            <FaBuilding />
          </div>

          <div className="card-content">
            <h3>Total Departments</h3>
            <p>{report?.totalDepartments}</p>
          </div>

        </div>

        <div className="card active">

          <div className="card-icon active-icon">
            <FaUserCheck />
          </div>

          <div className="card-content">
            <h3>Active Employees</h3>
            <p>{report?.activeEmployees}</p>
          </div>

        </div>

        <div className="card payroll">

          <div className="card-icon payroll-icon">
            <FaMoneyBillWave />
          </div>

          <div className="card-content">
            <h3>Total Payroll</h3>
            <p>₹ {report?.totalPayroll}</p>
          </div>

        </div>

      </div>

      {/* Filters */}

      <div className="filter-section">

       
        <select
          className="filter-select"
          value={selectedDepartment}
          onChange={(e) =>
            setSelectedDepartment(e.target.value)
          }
        >
          <option value="">All Departments</option>

         {departments
  .filter((department) =>
    department.departmentName
      .toLowerCase()
      .includes(searchText.toLowerCase())
  )
  .map((department) => (
            <option
              key={department.id}
              value={department.departmentName}
            >
              {department.departmentName}
            </option>
          ))}
        </select>

        <select
          className="filter-select"
          value={selectedStatus}
          onChange={(e) =>
            setSelectedStatus(e.target.value)
          }
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
<button
    className="search-btn"
    onClick={() => {}}
>
    Search
</button>
        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>

      </div>

      {/* Employee Table */}

      <div className="table-container">

        <div className="table-header">

          <h2>Employee Report</h2>

          <span>
            {filteredEmployees.length} Employees
          </span>

        </div>

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>{employee.name}</td>

                <td>{employee.email}</td>

                <td>{employee.department?.departmentName}</td>

                <td>
                 ₹ {employee.salary?.toLocaleString()}
                </td>

                <td>

                  <span
                    className={
                      employee.status === "Active"
                        ? "status-active"
                        : "status-inactive"
                    }
                  >
                    {employee.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Department Summary */}

      <div className="department-table-card">

        <div className="table-header">

          <h2>Department Summary</h2>

          <span>
            {departments.length} Departments
          </span>

        </div>

        <table>

          <thead>

            <tr>

              <th>ID</th>
              <th>Department</th>
              <th>Description</th>
              <th>Employees</th>

            </tr>

          </thead>

          <tbody>

            {departments.map((department) => (

              <tr key={department.id}>

                <td>{department.id}</td>

                <td>{department.departmentName}</td>

                <td>{department.description}</td>

                <td>
                  {
                    employees.filter(
                      (emp) =>
                        emp.department?.id ===
                        department.id
                    ).length
                  }
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
      <div className="charts-grid">

  <div className="chart-card">

    <h2>Employees by Department</h2>

    <ResponsiveContainer width="100%" height={320}>

      <BarChart data={departmentChartData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

       <Bar
    dataKey="employees"
    fill="#3b82f6">
    <LabelList dataKey="employees" position="top" />
    </Bar>
      </BarChart>

    </ResponsiveContainer>

  </div>

  <div className="chart-card">

    <h2>Employee Status</h2>

    <ResponsiveContainer width="100%" height={320}>

      <PieChart>

        <Pie
          data={statusChartData}
          dataKey="value"
          nameKey="name"
          outerRadius={110}
          label
        >

          {statusChartData.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index]}
            />

          ))}

        </Pie>

        <Tooltip />

        <Legend />

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>

    </div>
  );
};

export default Report;