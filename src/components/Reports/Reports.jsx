import React from 'react'
import Button from './Button'
import AddNewReport from './Wizzard/AddNewReport'

import './Wizzard/wizzard.scss';


const Reports = ({
  reports,
  candidates,
  searchCandidates,
  setSearchCandidates,
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

  console.log(reports)

  return (
    <>
      <div className="topBar">
        <h2>Reports</h2>
      </div>
      <div className="container_newReport">
        <AddNewReport
          candidates={candidates}
          searchCandidates={searchCandidates}
          setSearchCandidates={setSearchCandidates}
          reportCandidate={reportCandidate}
          setReportCandidate={setReportCandidate}
          reportCompany={reportCompany}
          setReportCompany={setReportCompany}
          reportInterviewDate={reportInterviewDate}
          setReportInterviewDdate={setReportInterviewDdate}
          reportPhase={reportPhase}
          setReportPhase={setReportPhase}
          reportStatus={reportStatus}
          setReportStatus={setReportStatus}
          addReport={addReport}
        />
      </div>
      <div>lista izvestaja</div>
    </>
  )
}

export default Reports