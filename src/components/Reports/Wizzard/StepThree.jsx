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
        <div className="formControl">
          <span htmlFor="interviewDate">The interview date:</span>
          <input
            id="interviewDate"
            type='date'
            max={new Date().toISOString().split('T')[0]}
            value={reportInterviewDate}
            onChange={(e) => setReportInterviewDdate(e.target.value)}
          />
        </div>

        <div className="formControl">
          <span htmlFor="phase">Interview phase:</span>
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
          <span>Interview status</span>
          <label className="radioInput" for="passed"><input type="radio" name="InterviewStatus" value="passed" />Passed</label>
          <label className="radioInput" for="declined"><input type="radio" name="InterviewStatus" value="declined" />declined</label>
        </fieldset>

        <div className="formControl">
          <span>Additional notes:</span><br />
          <textarea
            name="textValue"
            rows="8"
            cols="50"
            // value={reportNotes}
            onChange={e => setReportNotes(e.target.value)}
          />

        </div>

        <div className="btns">
          <input type="button" className='btnWizzard btnWizzardNext' onClick={handlePrevStep} value='Back' />
          <input type="submit" className='btnWizzard btnWizzardNext' value={'Save'} />
        </div>


      </form>
    </>
  )
}

export default StepThree