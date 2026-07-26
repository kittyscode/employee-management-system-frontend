import "../../styles/RecentEmployeeTable.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import employeeService from "../../services/employeeService";
function RecentEmployeeTable() {
  const navigate = useNavigate();
  const handleViewAll = () => {
    // Navigate to the EmployeeList page
    navigate("/employees");
  };
const [employees, setEmployees] = useState([]);
const [page, setPage] = useState(0);
const [totalPages, setTotalPages] = useState(0);
const size = 5;
useEffect(() => {
    fetchEmployees();
}, [page]);
const fetchEmployees = async () => {
    try {
        const response = await employeeService.getEmployees(page, size);

        setEmployees(response.data.content);
        setTotalPages(response.data.totalPages);

    } catch (error) {
        console.error(error);
    }
};

  return (
      <div className="employee-table-card">
      <div className="table-header">
        <h2>Recent Employees</h2>
        <button className="view-all-btn" onClick={handleViewAll}>
          View All
        </button>
      </div>
      
      <div className="table-wrapper">
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

          {employees.map((emp) => (

            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department?.departmentName}</td>
<td>₹{Number(emp.salary).toLocaleString("en-IN")}</td>
              <td>{emp.status}</td>
            </tr>

          ))}

        </tbody>

      </table>
      </div>
         <div className="pagination-container">
        <p>
    Showing {page * size + 1} to{" "}
    {Math.min((page + 1) * size, page * size + employees.length)}
</p>
        <div className="pagination">
<button
    disabled={page === 0}
    onClick={() => setPage(page - 1)}
>
    {"<"}
</button>       
  {Array.from({ length: totalPages }, (_, index) => (
    <button
        key={index}
        className={page === index ? "active-page" : ""}
        onClick={() => setPage(index)}
    >
        {index + 1}
    </button>
))}
<button
    disabled={page === totalPages - 1}
    onClick={() => setPage(page + 1)}
>
    {">"}
</button>        </div>
      </div>
    </div>
  );
}

export default RecentEmployeeTable;