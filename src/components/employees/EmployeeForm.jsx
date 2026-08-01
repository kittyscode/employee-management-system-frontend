import { useState } from "react";
import "../../styles/EmployeeForm.css";
import { useEffect } from "react";
import departmentService from "../../services/departmentService";

const EmployeeForm = ({onCancel, onSubmit,initialData=null,title="Add Employee" ,buttonText="Save Employee"}) => {

  const [employee, setEmployee] = useState(
    initialData || {
        name: "",
        email: "",
        phone: "",
        address: "",
        designation: "",
        joiningDate: "",
        salary: "",
        departmentId: "",
        status: "Active",
        profileImage: ""
    }
);
useEffect(() => {
    if (initialData) {
        setEmployee(initialData);
    }
}, [initialData]);
    const handleChange = (e) => {

        const { name, value } = e.target;

        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const [departments, setDepartments] = useState([]);

useEffect(() => {
    loadDepartments();
}, []);

const loadDepartments = async () => {
    try {
        const response = await departmentService.getAllDepartments();
        setDepartments(response.data);
    } catch (error) {
        console.error(error);
    }
};
    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(employee);
    };
    return (

        <div className="employee-form-card">

           <h2>{title}</h2>

            <form className="employee-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        placeholder="Enter employee name"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
    <label>Phone</label>

    <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
    />
</div>
<div className="form-group">

<label>Address</label>

<textarea
    name="address"
    value={employee.address}
    onChange={handleChange}
    placeholder="Enter address"
/>

</div><div className="form-group">

<label>Designation</label>

<input
    type="text"
    name="designation"
    value={employee.designation}
    onChange={handleChange}
    placeholder="Software Engineer"
/>

</div>
<div className="form-group">

<label>Joining Date</label>

<input
    type="date"
    name="joiningDate"
    value={employee.joiningDate}
    onChange={handleChange}
/>

</div>
                <div className="form-group">
                    <label>Salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        placeholder="Enter salary"
                    />
                </div>

                <div className="form-group">
                    <label>Department</label>

                    <select
                        name="departmentId"
                        value={employee.departmentId}
                        onChange={handleChange}
                    >
                       <option value="">Select Department</option>

{departments.map((department) => (
    <option
        key={department.id}
        value={department.id}
    >
        {department.departmentName}
    </option>
))}
                    </select>
                </div>
                <div className="form-group">

<label>Status</label>

<select
    name="status"
    value={employee.status}
    onChange={handleChange}
>

<option value="Active">
Active
</option>

<option value="Inactive">
Inactive
</option>

</select>

</div>
<div className="form-group">

<label>Profile Image URL</label>

<input
    type="text"
    name="profileImage"
    value={employee.profileImage}
    onChange={handleChange}
    placeholder="image path"
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
                       {buttonText}
                    </button>

                </div>

            </form>

        </div>

    );
};

export default EmployeeForm;