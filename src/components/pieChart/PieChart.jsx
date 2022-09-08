import "./pieChart.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = () => {
  return (
    <div className="pieChart">
      <div className="chartTop">
        <span className="chart_top_left">Revenue Sources</span>
        <span className="chart_top_right">
          <MoreVertIcon />
        </span>
      </div>
      <div className="chartBody">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            // cx={120}
            // cy={200}
            innerRadius={80}
            outerRadius={110}
            fill="#B8F3F2"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Piechart;
