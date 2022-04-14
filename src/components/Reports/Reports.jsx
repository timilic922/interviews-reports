import React, { useEffect, useState } from 'react'
import Button from './Button'
import AddNewReport from './Wizzard/AddNewReport'
import ListOfReports from './ListOfReports';

import './Wizzard/wizzard.scss';


const Reports = ({
  reports,
  setReports,
  candidates,
  searchCandidates,
  setSearchCandidates,
  companies,
  searchCompanies,
  setSearchCompanies,
  searchReports,
  setSearchReports,
  searchReportsResults,
  setSearchReportsResults,
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
  reportNotes,
  setReportNotes,
  addReport
}) => {

  const [showAddReport, setShowAddReport] = useState(false);

  return (
    <div className='reports'>
      <div className="topBar">
        <h2>Reports</h2>
        <div>
        {showAddReport ? (
          <button className='btn btnClose' onClick={() => setShowAddReport(!showAddReport)}> Close Form </button>
          ) : (
            <button className='btn btnAdd' onClick={() => setShowAddReport(!showAddReport)}> Add New Report </button>
          )
        }
        </div>
      </div>

      {showAddReport &&
        <div className="container_newReport">
          <h3>Add New Report</h3>
          <AddNewReport
            reports={reports}
            setReports={setReports}
            candidates={candidates}
            searchCandidates={searchCandidates}
            setSearchCandidates={setSearchCandidates}
            companies={companies}
            searchCompanies={searchCompanies}
            setSearchCompanies={setSearchCompanies}
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
            reportNotes={reportNotes}
            setReportNotes={setReportNotes}
            addReport={addReport}
          />
        </div>
      }
      {!showAddReport &&
        <div className="listAll">
          <div className='container'>
            <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
              <input
                // role='searchbox'
                className='search'
                type="text"
                id="search"
                placeholder='Company | Candidate | phase | status'
                value={searchReports}
                onChange={(e) => {
                  setSearchReports(e.target.value)}} />
            </form>
            {reports.length ? (
              <ListOfReports reports={reports} />
            ) : (
              <p className='noItems'>There is no reports</p>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Reports