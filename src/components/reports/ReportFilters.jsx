import React from "react";

const ReportFilters = () => {
  return (
    <div className="filters">
      <select>
        <option>All Departments</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
      </select>

      <select>
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button>Apply Filter</button>
    </div>
  );
};

export default ReportFilters;