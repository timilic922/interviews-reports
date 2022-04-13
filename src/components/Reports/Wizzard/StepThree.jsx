import React, { useState, useEffect } from "react";

const StepThree = ({
  handlePrevStep,
  reportCandidate,
  setReportCandidate,
  reportCompany,
  setReportCompany,
  reportInterviewDate,
  setReportInterviewDdate,
  reportPhase,
  setReportPhase,
  reportStatus,
  setReportStatus,
  addReport
}) => {

  // console.log('selected candidate:' + selectCandidate)
  // console.log('selected Company:' + selectCompany)


  return (
    <div>
      <form className='select' onSubmit={addReport}>
        <label htmlFor="">Candidate id:</label>
        <input
          id='candidateName'
          type="text"
          className='addInput'
          value={reportCandidate}
          placeholder={reportCandidate}
          disabled
        />
        <label htmlFor="">Company id:</label>
        <input
          id='candidateName'
          type="text"
          className='addInput'
          value={reportCompany}
          placeholder={reportCompany}
          disabled
        />
        <label htmlFor="selectCandidate">Select the Company</label>
        <div className="searchBox">
          <form className='searchInput'>
          </form>
          {/* <IoSearchCircleSharp className='searchIcon' /> */}
        </div>
        <div className="select">
          <select id="selectCandidate" name="selectCandidate" size="8">
            <option
              tabIndex={'0'}
              key='copmany1'
              value='copmany1'
              onClick={() => { }}>copmany1</option>
            <option
              tabIndex={'0'}
              key='copmany2'
              value='copmany2'
              onClick={() => { }}>copmany2</option>
          </select>
          <input type="submit" value={'submit'} />

        </div>
      </form>
    </div>
  )
}

export default StepThree