
import { useNavigate } from "react-router-dom";
import "../../styles/EmployeeTable.css"
import { FaPen, FaTrash } from "react-icons/fa";
const EmployeeTable = ({
    employees,
    onDelete,
    page,
    totalPages,
    nextPage,
    previousPage
}) => {  const navigate=useNavigate();
  
  return (
    <div className="employee-table-card">
      <h2>Employee List</h2>

      <table className="employee-table">
        <thead>
<tr>
    <th>Profile</th>
    <th>Employee</th>
    <th>Designation</th>
    <th>Department</th>
    <th>Joining Date</th>
    <th>Salary</th>
    <th>Status</th>
    <th>Actions</th>
</tr>
</thead>

      <tbody>

{employees.length > 0 ? (

employees.map((employee)=>(

<tr key={employee.id}>

    {/* Profile Image */}
    <td>

        {employee.profileImage ? (

            <img
               src={`${import.meta.env.VITE_API_BASE_URL}/uploads/profile/${employee.profileImage}`}
                alt={employee.name}
                className="employee-avatar"
            />

        ) : (

            <div className="employee-avatar-placeholder">
                {employee.name?.charAt(0)}
            </div>

        )}

    </td>


    {/* Employee Info */}
    <td>

        <div className="employee-name">

            <strong>
                {employee.name}
            </strong>

            <small>
                {employee.email}
            </small>

        </div>

    </td>


    {/* Designation */}
    <td>
        {employee.designation || "N/A"}
    </td>


    {/* Department */}
    <td>
        {employee.department?.departmentName || "N/A"}
    </td>


    {/* Joining Date */}
    <td>

        {employee.joiningDate
            ? new Date(employee.joiningDate)
                .toLocaleDateString("en-IN")
            : "N/A"
        }

    </td>


    {/* Salary */}
    <td>
        ₹{Number(employee.salary)
        .toLocaleString("en-IN")}
    </td>


    {/* Status */}
    <td>

        <span
        className={
            employee.status === "Inactive"
            ? "status-inactive"
            : "status-active"
        }
        >

        {employee.status || "Active"}

        </span>

    </td>


    {/* Actions */}
    <td>

    <div className="action-buttons">

        <button
        className="edit-btn"
        onClick={() =>
            navigate(`/employees/edit/${employee.id}`)
        }
        >

        <FaPen/>
        Edit

        </button>


        <button
        className="delete-btn"
        onClick={() =>
            onDelete(employee.id)
        }
        >

        <FaTrash/>
        Delete

        </button>


    </div>

    </td>


</tr>

))

):(


<tr>

<td colSpan="8" className="no-data">

No employees found.

</td>

</tr>


)}

</tbody>
      </table>
      <div className="pagination-container">

    <button
        className="page-btn"
        onClick={previousPage}
        disabled={page === 0}
    >
        Previous
    </button>

    <span className="page-number">
        Page {page + 1} of {totalPages}
    </span>

    <button
        className="page-btn"
        onClick={nextPage}
        disabled={page === totalPages - 1}
    >
        Next
    </button>

</div>
    </div>
  );
};

export default EmployeeTable;