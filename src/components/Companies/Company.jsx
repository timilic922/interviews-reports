import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ListOfCompanyReports from "./CompanyReports/ListOfCompanyReports";

const Company = ({ companies, companyDelete, reports }) => {
  const { id } = useParams();
  const company = companies.find(company => (company.id).toString() === id);


  return (
    <div className='singlePage'>
      <div className="topBar">
        <Link to="/admin/companies" className='btnBack'>
          <IoArrowBackCircleOutline className='btnBack-icon'/><h6>Companies</h6>
        </Link>

        <div className='options'>
          <div className='header'>
            <h2>{company.name}</h2>
            <span>{company.datetime}</span>
          </div>
          <div className='btns'>
          {/* <button className='btn btnDelete' style={{backgroundColor:'#7A0101', color:'white'}} onClick={() => companyDelete(company.id)}>Delete</button> */}
            <button className='btn btnDelete' onClick={() => companyDelete(company.id)}>Delete</button>
            <Link to={`/admin/companies/edit/${id}`} className='btn btnEdit'>
            <button>Edit</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='info'>
        {company && 
          <div id="showInfoCompany" className='showInfo '>
            <div className="showInfo-data">
              <h4>{company.name}</h4>
              <p>email: {company.email}</p>
              <p>pib: {company.pib}</p>
              <p>address: {company.address}</p>
              <p>contact: {company.contact}</p>
              <p>number: {company.number}</p>
            </div>
          </div>
        }
      </div>
      <ListOfCompanyReports id={company.id} reports={reports} />
    </div>
  )
}
export default Company;
