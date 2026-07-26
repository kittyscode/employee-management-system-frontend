import { useNavigate } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";

import "../../styles/DepartmentTable.css";

const DepartmentTable = ({ departments, onDelete }) => {

  const navigate = useNavigate();

  return (

    <div className="department-table-card">

      <h2>Department List</h2>

      <table className="department-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Department</th>

            <th>Description</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {departments.map((department) => (

            <tr key={department.id}>

              <td>{department.id}</td>

              <td>{department.departmentName}</td>

              <td>{department.description}</td>

              <td>

                <div className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      navigate(`/departments/edit/${department.id}`)
                    }
                  >
                    <FaPen />
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(department.id)}
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default DepartmentTable;