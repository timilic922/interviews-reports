import React from 'react'

const AddNewCompany = ({ addCompany, newCompanyName, setNewCompanyName, newCompanyEmail, setNewCompanyEmail }) => {
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
          <div className='companyEmail'>
            <label htmlFor="">Email</label>
            <input
              id='companyEmail'
              type="text"
              className='addInput'
              value={newCompanyEmail}
              onChange={(e) => setNewCompanyEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Save Candidate</button>
        </form>
      </div>
    </>
  )
}
export default AddNewCompany
