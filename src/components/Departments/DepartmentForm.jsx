import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/DeoartmentForm.css";

const DepartmentForm = ({ onSubmit, onCancel, initialData = {} }) => {

  const navigate = useNavigate();

  const [department, setDepartment] = useState({
    departmentName: "",
    description: "",
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setDepartment({
        departmentName: initialData.departmentName || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(department);
  };

  return (
    <div className="department-form-card">

      <h2>
        {initialData?.id ? "Edit Department" : "Add Department"}
      </h2>

      <form className="department-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Department Name</label>

          <input
            type="text"
            name="departmentName"
            value={department.departmentName}
            onChange={handleChange}
            placeholder="Enter department name"
            required
          />
        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="4"
            name="description"
            value={department.description}
            onChange={handleChange}
            placeholder="Enter description"
          />

        </div>

        <div className="form-buttons">

          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-btn"
          >
            {initialData?.id ? "Update Department" : "Save Department"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default DepartmentForm;