import {
  FaUserPlus,
  FaBuilding,
  FaChartLine,
  FaDownload
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/QuickAction.css";
import employeeService from "../../services/employeeService";
function QuickActions() {
const handleExport = async () => {

    try {

        const response = await employeeService.exportEmployees();

        const blob = new Blob(
            [response.data],
            {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }
        );

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "employees.xlsx";

        document.body.appendChild(link);

        link.click();

        link.remove();

    } catch(error) {

        console.error(error);

    }
};
    const navigate = useNavigate();

    return (

        <div className="quick-actions">

            <h2>Quick Actions</h2>

            <button
                className="action-btn employee-btn"
                onClick={() =>
                    navigate("/employees/add", {
                        state: { from: "/dashboard" }
                    })
                }
            >
                <FaUserPlus />
                Add Employee
            </button>

          <button
    className="action-btn department-btn"
    onClick={() =>
        navigate("/departments/add", {
            state: { from: "/dashboard" }
        })
    }
>
    <FaBuilding />
    Add Department
</button>
            <button
                className="action-btn report-btn"
                onClick={() => navigate("/reports")}
            >
                <FaChartLine />
                View Reports
            </button>

           <button
 className="action-btn export-btn"
 onClick={handleExport}
>
    <FaDownload />
    Export Data
</button>

        </div>

    );
}

export default QuickActions;