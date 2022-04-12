import React from "react";
import { Link, useParams } from "react-router-dom";


function Company({ companies, companyDelete, setCompanies}) {
  const { id } = useParams();
  const company = companies.find(company => (company.id).toString() === id);
  // console.log(companies);


  return (
    <div className="CompanyPage">
      <article className="company">
        {company && (
          <>
            <h1>{company.name}</h1>
            <h2>{company.email}</h2>
            <button on onClick={()=>{companyDelete(company.id)}}>
              Delete Company
            </button>
          </>
        )}
        {/* {!company && 
            <>
            <h2>Company not Found</h2>
            <Link to="/admin/companies">Go to Companies</Link>
            </>} */}
      </article>
    </div>
  );
}

export default Company;
