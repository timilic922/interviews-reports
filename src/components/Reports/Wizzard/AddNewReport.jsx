import React, { useState, useStep } from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const AddNewReport = ({
  reports,
  setReports,
  candidates,
  searchCandidates,
  setSearchCandidates,
  companies,
  searchCompanies,
  setSearchCompanies,
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
  setShowAddReport, 
  showAddReport,
  addReport
}) => {


  // const [selectCandidate, setSelectCandidate] = useState('');
  // const [selectCompany, setSelectCompany] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne
      handleNextStep={handleNextStep}
      candidates={candidates}
      searchCandidates={searchCandidates}
      setSearchCandidates={setSearchCandidates}
      reportCandidate={reportCandidate}
      setReportCandidate={setReportCandidate}
    />,
    <StepTwo
      companies={companies}
      searchCompanies={searchCompanies}
      setSearchCompanies={setSearchCompanies}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
      reportCandidate={reportCandidate}
      reportCompany={reportCompany}
      setReportCompany={setReportCompany}
    />,
    <StepThree
      handlePrevStep={handlePrevStep}
      reportCandidate={reportCandidate}
      reportCompany={reportCompany}
      // reports
      reports={reports}
      setReports={setReports}
      setReportCandidate={setReportCandidate}
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
  ];


  return (
    <>
      {steps[currentStep]}
    </>
  )
}

export default AddNewReport

