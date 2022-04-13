import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";




function Sidebar() {
  const logOut = () => {
    const flag = false;
    if (!flag) {
      <Link to="/"></Link>;}
    
  };
  return (
    <aside className="sideBar">
      <div className="sideBar-top">
        <div className="logo" style={{color:'white'}}>logo</div>
        <nav>
          <Link to="/admin/candidates" className="navItem">
            <p>Canidates</p>
          </Link>
          <Link to="/admin/companies" className="navItem">
            <p>Companies</p>
          </Link>
          <Link to="/admin/reports" className="navItem">
            <p>Reports</p>
          </Link>
        </nav>
      </div>
      <Link className="logOut" to="/">
        {" "}
        <button className="logOut" onClick={logOut}>LogOut</button>
      </Link>
    </aside>
  );
}

export default Sidebar;
