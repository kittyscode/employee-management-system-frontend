import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/DepartmentChart.css";

const DepartmentChart = () => {
  const data = [
    { name: "IT", value: 40 },
    { name: "HR", value: 20 },
    { name: "Finance", value: 15 },
    { name: "Marketing", value: 25 },
  ];

  const COLORS = [
    "#6366f1",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div className="department-chart">
      <h2>Departments</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentChart;