import "./widget.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_left">
        <div>Earnings</div>
        <span>$ 40,000</span>
      </div>
      <div className="widget_right">
        <BusinessCenterIcon />
      </div>
    </div>
  );
};

export default Widget;
