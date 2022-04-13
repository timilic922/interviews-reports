import React, { useState, useStep } from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const AddNewReport = ({
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
      setReportCandidate={setReportCandidate}
      setReportCompany={setReportCompany}
      reportInterviewDate={reportInterviewDate}
      setReportInterviewDdate={setReportInterviewDdate}
      reportPhase={reportPhase}
      setReportPhase={setReportPhase}
      reportStatus={reportStatus}
      setReportStatus={setReportStatus}
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

