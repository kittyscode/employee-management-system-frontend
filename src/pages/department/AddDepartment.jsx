import { useLocation, useNavigate } from "react-router-dom";import { toast } from "react-toastify";

import DepartmentForm from "../../components/Department/DepartmentForm";
import departmentService from "../../services/departmentService";

const AddDepartment = () => {

  const navigate = useNavigate();
  const location = useLocation();
const from = location.state?.from || "/departments";
console.log("From:", from);
  const saveDepartment = async (department) => {

    try {

      await departmentService.createDepartment(department);

      toast.success("Department added successfully!");

      navigate("/departments");

    } catch (error) {

      console.error(error);

      toast.error("Failed to add department");

    }

  };

  return (

    <div>

     <DepartmentForm
    onSubmit={saveDepartment}
    onCancel={() => navigate(from)}
/>

    </div>

  );

};

export default AddDepartment;