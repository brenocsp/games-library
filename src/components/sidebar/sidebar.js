import React from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./sidebarData";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navmenu">
        <ul className="nav-menu-items">
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="logout">
        <Link to="/login">
          <img src="./assets/logout_red.png" alt="Logout Icon"></img>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
