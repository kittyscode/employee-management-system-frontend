import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import DepartmentForm from "../../components/departments/DepartmentForm";
import departmentService from "../../services/departmentService";

const EditDepartment = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [department, setDepartment] = useState({});

  useEffect(() => {

    loadDepartment();

  }, []);

  const loadDepartment = async () => {

    try {

      const response =
        await departmentService.getDepartmentById(id);

      setDepartment(response.data);

    } catch (error) {

      console.error(error);

      toast.error("Unable to load department");

    }

  };

  const updateDepartment = async (updatedDepartment) => {

    try {

      await departmentService.updateDepartment(
        id,
        updatedDepartment
      );

      toast.success("Department updated successfully!");

      navigate("/departments");

    } catch (error) {

      console.error(error);

      toast.error("Update failed");

    }

  };

  return (

    <div>

      <DepartmentForm
        onSubmit={updateDepartment}
        initialData={department}
      />

    </div>

  );

};

export default EditDepartment;