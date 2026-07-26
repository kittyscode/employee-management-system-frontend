
const ReportCards = ({ report }) => {
  return (
    <div className="cards-container">
      <div className="card green">
        <h3>Total Employees</h3>
        <p>{report.totalEmployees}</p>
      </div>

      <div className="card blue">
        <h3>Total Departments</h3>
        <p>{report.totalDepartments}</p>
      </div>

      <div className="card orange">
        <h3>Active Employees</h3>
        <p>{report.activeEmployees}</p>
      </div>

      <div className="card purple">
        <h3>Total Payroll</h3>
        <p>₹ {report.totalPayroll}</p>
      </div>
    </div>
  );
};

export default ReportCards;