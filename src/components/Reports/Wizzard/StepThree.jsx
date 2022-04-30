import React, { useState, useEffect } from "react";

const StepThree = ({
  handlePrevStep,
  reportCandidate,
  setReportCandidate,
  reportCompany,
  setReportCompany,
  reports,
  setReports,
  reportInterviewDate,
  setReportInterviewDdate,
  reportPhase,
  setReportPhase,
  reportStatus,
  setReportStatus,
  reportNotes,
  setReportNotes,
  setShowAddReport, 
  showAddReport,
  addReport
}) => {

  // console.log('selected candidate:' + selectCandidate)
  // console.log('selected Company:' + selectCompany)

  const phases = ['cv', 'hr', 'tech', 'final']

  // phases.map(phase => (console.log(phase)));


  return (
    <>
      <div className="row">
        <p>Candidate: <span className="rowSpan">{reportCandidate.name}</span></p>
      </div>
      <div className="row">
        <p>Company: <span className="rowSpan">{reportCompany.name}</span></p>
      </div>
      <form className='addNew-report' onSubmit={addReport}>
        <div className="formControl top-border">
          <label htmlFor="interviewDate">The interview date:</label>
          <input
            id="interviewDate"
            type='date'
            max={new Date().toISOString().split('T')[0]}
            value={reportInterviewDate}
            onChange={(e) => setReportInterviewDdate(e.target.value)}
          />
        </div>

        <div className="formControl">
          <label htmlFor="phase">Interview phase:</label>
          <select id="phase"
            onClick={(e) => setReportPhase(e.target.value)}
          >
            {phases.map(phase => (
              <option
                key={phase}
                value={phase}
              >
                {phase}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="InterviewStatus formControl" value={reportStatus} onChange={e => setReportStatus(e.target.value)}>
          <label>Interview status</label>
          <label className="radioInput" htmlFor="passed"><input type="radio" name="InterviewStatus" value="passed" />Passed</label>
          <label className="radioInput" htmlFor="declined"><input type="radio" name="InterviewStatus" value="declined" />declined</label>
        </fieldset>

        <div className="formControl">
          <label>Additional notes:</label><br />
          <textarea
            name="textValue"
            rows="8"
            cols="50"
            // value={reportNotes}
            onChange={e => setReportNotes(e.target.value)}
          />

        </div>

        <div className="btn-container">
          <input type="button" className='btnWizzard btnWizzardBack' onClick={handlePrevStep} value='Back' />
          <input type='submit' className='btnWizzard btnWizzardNext' value={'Save'} />
        </div>


      </form>
    </>
  )
}

export default StepThree