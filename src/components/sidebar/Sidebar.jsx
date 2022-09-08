import "./sidebar.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Sidebar = () => {
  const [com_open, setCom_open] = useState(false);
  const [uti_open, setUti_open] = useState(false);
  const [pages_open, setPages_open] = useState(false);
  const [charts_open, setCharts_open] = useState(false);
  // const [com_open, setCom_open] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo">SB logo</div>
      <hr />
      <div className="dashboarcd_link">Dashboard</div>
      <hr />
      <div className="section">
        <div className="section_heading">INTERFACE</div>
        <div className="sectionChild" onClick={() => setCom_open(!com_open)}>
          <div className="sectionChild_left">
            <OfflineShareIcon />
            Components
          </div>
          {com_open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </div>
        <div
          className="childOptions"
          style={{ display: com_open ? "block" : "none" }}
        >
          <div className="childOption_wrapper">
            <span>CUSTOM COMPONENTS:</span>
            <button>Buttons</button>
            <button>Cards</button>
          </div>
        </div>
        <div className="sectionChild" onClick={() => setUti_open(!uti_open)}>
          <div className="sectionChild_left">
            <OfflineShareIcon />
            Utilities
          </div>
          {uti_open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="section_heading">ADD ONS</div>
        <div
          className="sectionChild"
          onClick={() => setPages_open(!pages_open)}
        >
          <div className="sectionChild_left">
            <OfflineShareIcon />
            Pages
          </div>
          {pages_open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </div>
        <div
          className="sectionChild"
          onClick={() => setCharts_open(!charts_open)}
        >
          <div className="sectionChild_left">
            <OfflineShareIcon />
            Charts
          </div>
          {charts_open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
        </div>
        <div className="sectionChild">
          <div className="sectionChild_left">
            <OfflineShareIcon />
            Tables
          </div>
          {/* {com_open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />} */}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
