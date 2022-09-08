import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import Badge from "@mui/material/Badge";
import { useState } from "react";

const Navbar = () => {
  const [notification, setNotification] = useState(false);
  const [msg, setMsg] = useState(false);

  return (
    <div className="navbar">
      <div className="nav_left">
        <input type="search" placeholder="Search" className="navbar_search" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="nav_right">
        <div className="msg">
          <Badge badgeContent={4} color="error">
            <MessageIcon
              color="action"
              className="msg_icon icon"
              onClick={() => setNotification(!notification)}
            />
          </Badge>
          <div
            className="msg_wrapper_div"
            style={{ display: notification ? "block" : "none" }}
          >
            <div className="msg_wrapper">
              <Msg_box />
              <Msg_box />
              <Msg_box />
              <Msg_box />
            </div>
          </div>
        </div>
        <div className="not">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon
              color="action"
              className="icon"
              onClick={() => setMsg(!msg)}
            />
          </Badge>
          <div
            className="noti_wrapper_div"
            style={{ display: msg ? "block" : "none" }}
          >
            <Noti_box />
            <Noti_box />
            <Noti_box />
            <Noti_box />
            <Noti_box />
          </div>
        </div>
        | <span className="username">John Doe</span>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;

const Msg_box = () => {
  return (
    <div className="msg_modal">
      <Avatar />
      <div className="info">
        <span className="user_name">John Doe </span>
        <span className="user_msg">
          Hi, are you going for conference tomorrow ?
        </span>
      </div>
    </div>
  );
};

const Noti_box = () => {
  return (
    <div className="msg_modal">
      <Avatar />
      <div className="info">
        <span className="user_msg">
          <span className="user_name">John Doe </span> liked your comment on his
          post.
        </span>
      </div>
    </div>
  );
};
