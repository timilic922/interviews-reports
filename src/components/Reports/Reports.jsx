import React, { useEffect, useState } from 'react'
import AddNewReport from './Wizzard/AddNewReport'
import ListOfReports from './ListOfReports';
import {IoCloseOutline} from 'react-icons/io5';

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
  addReport,
  setShowAddReport,
  showAddReport
}) => {

  

  return (
    <div className='AllPage AllPage-report'>
      <div className="topBar">
        <h2>Reports</h2>
        <div>
          {showAddReport ? (
            <button className='btn btnClose' onClick={() => setShowAddReport(!showAddReport)}><IoCloseOutline/> Close Form </button>
          ) : (
            <button className='btn btnAddReport' onClick={() => setShowAddReport(!showAddReport)}>new report</button>
          )
          }
        </div>
      </div>

      {showAddReport &&
        <div className="container_newReport">
          <h3 className='newReport_header'>Add New Report</h3>
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
            showAddReport={showAddReport}
            setShowAddReport={setShowAddReport}
            addReport={addReport}
          />
        </div>
      }
      {!showAddReport &&
        <div className='container'>
          <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
            <input
              className='search'
              type="text"
              id="search"
              placeholder='Company | Candidate | phase | status'
              value={searchReports}
              onChange={(e) => {
                setSearchReports(e.target.value)
              }} />
          </form>
          {reports.length ? (
            <ListOfReports reports={reports} />
          ) : (
            <p className='noItems'>There is no reports</p>
          )}
        </div>
      }
    </div>
  )
}

export default Reports