import { useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5'

const EditCompany = ({ editCompany, companies, setCompanies, editCompanyName,
  setEditCompanyName, editCompanyEmail, setEditCompanyEmail }) => {
  const { id } = useParams();
  const company = companies.find(company => (company.id).toString() === id);
  useEffect(() => {
    if (company) {
      setEditCompanyName(company.name)
      setEditCompanyEmail(company.email)
    }
  }, [company, setEditCompanyName, setEditCompanyEmail])

  return (
    <>
      <div className="topBar">
        <Link to="/admin/candidates" className='btnBack'>
          <IoArrowBackCircleOutline className='btnBack-icon' /><h6>Candidates</h6>
        </Link>
        <h2>Add New Candidate</h2>
      </div>
      <div className="container containerInputs">
        <form
          className='addNew'
          onSubmit={e => e.preventDefault()}
        >
          <div className='formControl'>
            <label htmlFor="candidateName">Company Name:</label>
            <input
              id='companyName'
              type="text"
              className='addInput'
              value={editCompanyName}
              onChange={(e) => setEditCompanyName(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor="">Email</label>
            <input
              id='companyEmail'
              type="text"
              className='addInput'
              value={editCompanyEmail}
              onChange={(e) => setEditCompanyEmail(e.target.value)}
            />
          </div>
          <button type='submit' className="btn btnSave"  onClick={() => editCompany(company.id)} >Save Company</button>
        </form>
      </div>
    </>
  )
}

export default EditCompany