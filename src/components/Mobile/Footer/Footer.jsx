import React from 'react';
import { Link } from "react-router-dom";
import { IoPeopleSharp, IoBusinessSharp, IoDocumentTextSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer