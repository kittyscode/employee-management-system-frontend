import EmployeeForm from "../../components/employees/EmployeeForm";
import employeeService from "../../services/employeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation} from "react-router-dom";
const AddEmployee = () => {

    const navigate = useNavigate();
    const location = useLocation();
const from = location.state?.from || "/employees";
const saveEmployee = async (employee) => {

    console.log("Save clicked", employee);

    const employeeData = {
        ...employee,
        departmentId: Number(employee.departmentId),
        salary: Number(employee.salary)
    };

    try {

        console.log("Sending:", employeeData);

        await employeeService.createEmployee(employeeData);

        toast.success("Employee added successfully!");

        navigate("/employees");

    } catch (error) {

    console.error("Create Employee Error:", error);

    console.error(error.response?.data);

    toast.error(
        error.response?.data?.message || "Failed to add employee"
    );
}
};
    return (

        <div>

            <h1>Add Employee</h1>

         <EmployeeForm
    onSubmit={saveEmployee}
    onCancel={() => navigate(from)}
/>
        </div>

    );

};

export default AddEmployee;