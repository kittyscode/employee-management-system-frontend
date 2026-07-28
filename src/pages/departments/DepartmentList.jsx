import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import DepartmentTable from "../../components/Departments/DepartmentTable";
import departmentService from "../../services/departmentService";

import "../../styles/DepartmentList.css";

const DepartmentList = () => {
  const { searchText } = useContext(SearchContext);

  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDepartments = async () => {

    try {

      const response = await departmentService.getAllDepartments();

      setDepartments(response.data);

    } catch (error) {

      console.error(error);

      toast.error("Unable to load departments");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchDepartments();

  }, []);
  
useEffect(() => {

    const searchDepartments = async () => {

        if (searchText.trim() === "") {
            fetchDepartments();
            return;
        }

        try {

            const response =
                await departmentService.searchDepartments(searchText);

            setDepartments(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    searchDepartments();

}, [searchText]);
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this department?"
    );

    if (!confirmDelete) return;

    try {

      await departmentService.deleteDepartment(id);

      toast.success("Department deleted successfully");

      fetchDepartments();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed");

    }

  };

  if (loading) return <h2>Loading...</h2>;

  return (

    <div className="department-list">

    <div className="department-header">

        <h1>Departments</h1>

       <button
        className="add-btn"
    onClick={() =>
        navigate("/departments/add", {
            state: { from: "/departments" }
        })
    }
>
    + Add Department
</button>

    </div>

    <DepartmentTable
        departments={departments}
        onDelete={handleDelete}
    />

</div>

  );

};

export default DepartmentList;