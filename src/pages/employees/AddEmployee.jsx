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

        const employeeData = {
            ...employee,
            department: {
                id: employee.departmentId
            }
        };

        delete employeeData.departmentId;

        try {

            await employeeService.createEmployee(employeeData);

            toast.success("Employee added successfully!");
            navigate("/employees");

        } catch (error) {

            console.error(error);

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