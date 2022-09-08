import "./areaChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Areachart = () => {
  const data = [
    {
      name: "Jan",
      uv: 500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 1500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1500,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3500,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="areaChart">
      <div className="chartTop">
        <span className="chart_top_left">Earnings Review</span>
        <span className="chart_top_right">
          {" "}
          <MoreVertIcon />
        </span>
      </div>
      <div className="chartBody">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          height={400}
          width={700}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#b3d9ff"
            width={20}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Areachart;
