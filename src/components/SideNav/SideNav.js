import React from "react";
import { Link } from "react-router-dom";
import { SideNavData } from "./SideNavData";
import "./SideNav.css";

function SideNav() {
  return (
    <div className="sidebar">
      <nav className="navmenu">
        <ul className="nav-menu-items">
          {SideNavData.map((item, index) => {
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

export default SideNav;
