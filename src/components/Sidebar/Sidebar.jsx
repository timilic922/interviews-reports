import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
// import { FiUsers } from "react-icons/fi";                                                                                          


function Sidebar() {
  const logOut = () => {
    const flag = false;
    if (!flag) {
      <Link to="/"></Link>;
    }
  };
  return (
    <aside className="sideBar">
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
      <Link className="logOut" to="/">
        {" "}
        <button onClick={logOut}>LogOut</button>
      </Link>
    </aside>
  );
}

export default Sidebar;
