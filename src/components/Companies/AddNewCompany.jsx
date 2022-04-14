import React from 'react'

const AddNewCompany = ({ addCompany, newCompanyName, setNewCompanyName, newCompanyEmail, setNewCompanyEmail, newCompanyNumber,
  setNewCompanyNumber,
  newCompanyPIB,
  setNewCompanyPIB,
  newCompanyAddress,
  setNewCompanyAddress,
  newCompanyContact,
  setNewCompanyContact, }) => {
  return (
    <>
      <div className="topBar">
        <h2>Add New Company</h2>
      </div>
      <div className="container">
        <form
          className='addNew'
          onSubmit={addCompany}>
          <div className='formControl'>
            <label htmlFor="companyName">Company Name:</label>
            <input
              id='companyName'
              type="text"
              className='addInput'
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor="">Email</label>
            <input
              id='companyEmail'
              type="text"
              className='addInput'
              value={newCompanyEmail}
              onChange={(e) => setNewCompanyEmail(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="">Number</label>
            <input
              id="CompanyNumber"
              type="text"
              className="addInput"
              value={newCompanyNumber}
              onChange={(e) => setNewCompanyNumber(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="">PIB:</label>
            <input
              id="CompanyPIB"
              type="text"
              className="addInput"
              value={newCompanyPIB}
              onChange={(e) => setNewCompanyPIB(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="">Address:</label>
            <input
              id="CompanyAderess"
              type="text"
              className="addInput"
              value={newCompanyAddress}
              onChange={(e) => setNewCompanyAddress(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="">Contact:</label>
            <input
              id="CompanyContact"
              type="text"
              className="addInput"
              value={newCompanyContact}
              onChange={(e) => setNewCompanyContact(e.target.value)}
            />
          </div>
          <button type='submit'>Save Candidate</button>
        </form>
      </div>
    </>
  )
}
export default AddNewCompany
