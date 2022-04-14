import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { IoPeopleSharp, IoBusinessSharp, IoDocumentTextSharp } from "react-icons/io5";





function Sidebar() {
  const logOut = () => {
    const flag = false;
    if (!flag) {
      <Link to="/"></Link>;}
    
  };
  return (
    <aside className="sideBar">
      <div className="logo" style={{color:'white'}}>logo</div>
    
        <nav>
          <Link to="/admin/candidates" className="navItem">
            <IoPeopleSharp className="navIcon"/>
            Canidates
          </Link>
          <Link to="/admin/companies" className="navItem">
            <IoBusinessSharp className="navIcon"/>
            Companies
          </Link>
          <Link to="/admin/reports" className="navItem">
            <IoDocumentTextSharp className="navIcon"/>
            Reports
          </Link>
        </nav>

      <Link className="logOut" to="/">
        {" "}
        <button className="logOut" onClick={logOut}>LogOut</button>
      </Link>
    </aside>
  );
}

export default Sidebar;
