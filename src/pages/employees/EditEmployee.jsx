import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import EmployeeForm from "../../components/employees/EmployeeForm";
import employeeService from "../../services/employeeService";
import "../../styles/EditEmployee.css"
const EditEmployee = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {

        try {

            const response = await employeeService.getEmployeeById(id);

            setEmployee({
                ...response.data,
                departmentId: response.data.department?.id || ""
            });

        } catch (error) {

            console.error(error);
            toast.error("Unable to load employee.");

        } finally {

            setLoading(false);

        }

    };

    const updateEmployee = async (updatedEmployee) => {

        const employeeData = {
            ...updatedEmployee,
            department: {
                id: updatedEmployee.departmentId
            }
        };

        delete employeeData.departmentId;

        try {

            await employeeService.updateEmployee(id, employeeData);

            toast.success("Employee updated successfully!");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            toast.error("Update failed.");

        }

    };

    if (loading) return <h2>Loading...</h2>;

    return (

        <EmployeeForm
            initialData={employee}
            onSubmit={updateEmployee}
            title="Edit Employee"
            buttonText="Update Employee"
        />

    );

};

export default EditEmployee;