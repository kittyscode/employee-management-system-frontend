import "../../styles/Report.css"
const EmployeeReportTable = () => {
  const employees = [
    { id: 1, name: "John Doe", status: "Active", salary: 50000 },
    { id: 2, name: "Jane Smith", status: "Active", salary: 60000 },
    { id: 3, name: "Alex Brown", status: "Inactive", salary: 40000 }
  ];

  return (
    <div className="table-container">
      <h2>Employee Report</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.status}</td>
              <td>₹ {emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeReportTable;