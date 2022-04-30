import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { IoPeopleSharp, IoBusinessSharp, IoDocumentTextSharp, IoLogOutSharp } from "react-icons/io5";

import "./sidebar.scss";


function Sidebar({setIsLogedIn}) {

  const history = useHistory();

  const logOut = () => {
    setIsLogedIn("")
    // history.push('/')
  };

  return (
    <aside className="sideBar">

      <div className="sideBar-top">
      <div className="logo">interview tracker</div>
        <nav>

          <Link to="/admin/candidates" className="navItem">
            <IoPeopleSharp className="navIcon" />
            Canidates
          </Link>
          <Link to="/admin/companies" className="navItem">
            <IoBusinessSharp className="navIcon" />
            Companies
          </Link>
          <Link to="/admin/reports" className="navItem">
            <IoDocumentTextSharp className="navIcon" />
            Reports
          </Link>
        </nav>
      </div>
      <Link className="logOut" to="" onClick={logOut}>
        {" "}
         LogOut <IoLogOutSharp/>
        
      </Link>

    </aside>
  );
}

export default Sidebar;

