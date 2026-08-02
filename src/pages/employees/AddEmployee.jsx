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
    try {

        let profileImage = "";

        // Upload image first
        if (employee.profileImageFile) {

            const formData = new FormData();

            formData.append("file", employee.profileImageFile);

            const uploadResponse =
                await employeeService.uploadImage(formData);

            profileImage = uploadResponse.data.fileName;
        }

        // Prepare employee data
        const employeeData = {
            ...employee,
            profileImage,
            departmentId: Number(employee.departmentId),
            salary: Number(employee.salary)
        };

        await employeeService.createEmployee(employeeData);

        toast.success("Employee added successfully");

        navigate("/employees");

    } catch (error) {

        console.error(error);

        toast.error("Failed to save employee");
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