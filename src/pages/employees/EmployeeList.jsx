import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import employeeService from "../../services/employeeService";
import EmployeeTable from "../../components/employees/EmployeeTable";
import "../../styles/employeeList.css";
import { SearchContext } from "../../context/SearchContext";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { searchText } = useContext(SearchContext);
    const [page, setPage] = useState(0);
const [size] = useState(5);
const [totalPages, setTotalPages] = useState(0);
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {

        await employeeService.deleteEmployee(id);

        fetchEmployees();

    } catch (error) {

        console.error(error);

    }
};

    const fetchEmployees = async () => {

        try {

           const response = await employeeService.getEmployees(page, size);

setEmployees(response.data.content);
setTotalPages(response.data.totalPages);

        } catch (error) {

            console.error(error);
            setError("Failed to load employees");

        } finally {

            setLoading(false);

        }
    };
    

    useEffect(() => {
        fetchEmployees();
    }, [page]);
    const nextPage = () => {
    if (page < totalPages - 1) {
        setPage(page + 1);
    }
};

const previousPage = () => {
    if (page > 0) {
        setPage(page - 1);
    }
};
    useEffect(() => {

    if (searchText.trim() === "") {
        return;
    }

    const searchEmployees = async () => {

        try {

            const response =
                await employeeService.searchEmployees(searchText);

            setEmployees(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    searchEmployees();
    

}, [searchText]);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>{error}</h2>;

    return (

       <div className="employee-list">

    <div className="employee-list-header">

        <h1>Employees</h1>

       <button
        className="add-btn"
        onClick={() => navigate("/employees/add")}
    >
        + Add Employee
    </button>

    </div>
   
  <EmployeeTable
    employees={employees}
    onDelete={handleDelete}
    page={page}
    totalPages={totalPages}
    nextPage={nextPage}
    previousPage={previousPage}
/>
</div>
    );
};

export default EmployeeList;