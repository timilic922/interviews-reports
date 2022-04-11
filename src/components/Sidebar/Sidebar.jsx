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
        <Link to="/candidates">
          <p>Canidates</p>                                                                                     
        </Link>
        <Link to="/admin/Companies">
          <p>Companies</p>
        </Link>
        <Link to="/admin/Reports">
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
