import { Button } from "@mui/material";
import "./App.css";
import Areachart from "./components/areaChart/AreaChart";
import Navbar from "./components/navbar/Navbar";
import Piechart from "./components/pieChart/PieChart";
import Sidebar from "./components/sidebar/Sidebar";
import Widget from "./components/widget/Widget";

function App() {
  return (
    <div className="App">
      <div className="sidebar_div">
        {/* sidebar */}
        <Sidebar />
      </div>
      <div className="main">
        {/* navbar */}
        <Navbar />
        <div className="main_body">

          <div className="main_header">
            <h2>Dashboard</h2>
            <Button variant="contained" className="generate_report_btn">Generate Report</Button>
          </div>

          {/* widget */}
          <div className="widget_binder">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
          <div className="charts">
            {/* area chart */}
            <Areachart className="area_chart" />
            {/* pie chart */}
            <Piechart className="pie_chart" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
