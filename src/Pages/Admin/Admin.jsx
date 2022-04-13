import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { format } from 'date-fns';
// CANDIDATES
import Candidates from '../../components/Candidates/Candidates';
import Candidate from '../../components/Candidates/Candidate';
import EditCandidate from "../../components/Candidates/EditCandidate";
import NewCandidate from '../../components/Candidates/AddNewCandidate'
//COMPANIES
import Companies from '../../components/Companies/Companies';
import Company from '../../components/Companies/Company';
import AddNewCompany from '../../components/Companies/AddNewCompany'
import EditCompany from "../../components/Companies/EditCompany";
//REPORTS
import Reports from '../../components/Reports/Reports'
import Report from '../../components/Reports/Report'
import AddNewReport from '../../components/Reports/Wizzard/AddNewReport'

import "./admin.scss";

function Admin() {
  // candidates
  const [candidates, setCandidates] = useState([])
  const [searchCandidates, setSearchCandidates] = useState('');
  const [searchCandidatesResults, setSearchCandidatesResults] = useState([]);
  const [candidateName, setCandidateName] = useState('');
  const [candidateImg, setCandidateImg] = useState('');
  const [candidateBirthday, setCandidateBirthday] = useState('');
  const [candidateTitle, setCandidateTitle] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [editCandidateName, setEditCandidateName] = useState('');
  const [editCandidateImg, setEditCandidateImg] = useState('');
  const [editCandidateBirthday, setEditCandidateBirthday] = useState('');
  const [editCandidateTitle, setEditCandidateTitle] = useState('');
  const [editCandidateEmail, setEditCandidateEmail] = useState('');

  // companies
  const [companies, setCompanies] = useState([])
  const [searchCompanies, setSearchCompanies] = useState("");
  const [searchCompaniesResults, setSearchCompaniesResults] = useState([])
  const [newCompanyName, setNewCompanyName] = useState("")
  const [newCompanyEmail, setNewCompanyEmail] = useState("")
  const [editCompanyName, setEditCompanyName] = useState('');
  const [editCompanyEmail, setEditCompanyEmail] = useState('');

  // reports
  const [reports, setReports] = useState([]);
  const [searchReports, setSearchReports]=useState("");
  const [searchReportsResults, setSearchReportsResults]=useState([])
  const [reportCandidate, setReportCandidate] = useState('');
  const [reportCompany, setReportCompany] = useState('');
  const [reportInterviewDate, setReportInterviewDdate] = useState('');
  const [reportPhase, setReportPhase] = useState('');
  const [reportStatus, setReportStatus] = useState('');

  const history = useHistory();

  const API_CANDIDATES = 'http://localhost:3500/candidates';
  const API_COMPANIES = 'http://localhost:3500/companies';
  const API_REPORTS = 'http://localhost:3500/reports';

  // fetch candidates
  useEffect(() => {
    fetch(API_CANDIDATES)
      .then((res) => res.json())
      .then((response) => setCandidates(response))
  }, [])

  // filter candidates
  useEffect(() => {
    const filterResults = candidates.filter(candidate =>
      ((candidate.name).toLowerCase()).includes(searchCandidates.toLowerCase())
      || ((candidate.email).toLowerCase()).includes(searchCandidates.toLowerCase())
      || ((candidate.title).toLowerCase()).includes(searchCandidates.toLowerCase()))
    setSearchCandidatesResults(filterResults.reverse());
  }, [candidates, searchCandidates])

  // add new candidate
  const addCandidate = (e) => {
    e.preventDefault();
    const id = candidates.length ? (candidates[candidates.length - 1].id + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newCandidate = { id, name: candidateName, img: candidateImg, birthday: candidateBirthday, title: candidateTitle, email: candidateEmail, datetime };
    console.log(newCandidate)
    fetch(API_CANDIDATES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCandidate)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        const allCandidates = [...candidates, res];
        setCandidates(allCandidates);
        history.push('/admin/candidates');
      });
  }

  // delete candidate
  const deleteCandidate = (id) => {
    fetch(`${API_CANDIDATES}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(() => {
        const candidatesList = candidates.filter(candidate => candidate.id !== id);
        setCandidates(candidatesList);
        history.push('/admin/candidates');
      });
  }

  // edit candidate
  const editCandidate = (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedCandidate = { id, name: editCandidateName, img: editCandidateImg, birthday: editCandidateBirthday, title: editCandidateTitle, email: editCandidateEmail, datetime };
    console.log(updatedCandidate)
    fetch(`${API_CANDIDATES}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCandidate)
    })
      .then((res) => res.json())
      .then((res) => {
        setCandidates(candidates.map(candidate => candidate.id === id ? { ...res } : updatedCandidate));
        history.push(`/admin/candidates/${id}`);
      });
  }



  // ***************************************************************************
  // ***************************************************************************
  // **********************  COMPANIES  *********************************

  // read companies
  useEffect(() => {
    fetch(API_COMPANIES)
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  }, [])

  //  companies filter
  useEffect(() => {
    const filterResults = companies.filter(company =>
      ((company.name).toLowerCase()).includes(searchCompanies.toLowerCase())
      || ((company.email).toLowerCase()).includes(searchCompanies.toLowerCase()))
    setSearchCompaniesResults(filterResults.reverse());
  }, [companies, searchCompanies])

  // add new company
  const addCompany = (e) => {
    e.preventDefault();
    const id = companies.length ? (companies[companies.length - 1].id + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newCompany = { id, name: newCompanyName, email: newCompanyEmail, datetime };
    // console.log(newCompany)
    fetch(API_COMPANIES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompany)
    }).then(res => res.json())
      .then(res => {
        const allCompanies = [...companies, res];
        setCompanies(allCompanies);
        history.push('/admin/companies');
      });
  }

  // delete company
  const companyDelete = (id) => {
    fetch(`${API_COMPANIES}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(() => {
        const companyList = companies.filter(candidate => candidate.id !== id);
        setCompanies(companyList)
      });
    history.push("/admin/companies")
  }

  // edit company
  const editCompany = (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedCompany = { id, name: editCompanyName, email: editCompanyEmail, datetime };
    console.log(companies)
    fetch(`${API_COMPANIES}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCompany)
    })
      .then((res) => res.json())
      .then((res) => {
        setCompanies(companies.map(company => company.id === id ? { ...res } : updatedCompany));
        history.push(`/admin/companies/${id}`);
      });
  }


  // ***************************************************************************
  // ***************************************************************************
  // **********************  REPORTS  *********************************

  // REPORTS
  // fetch reports
  useEffect(() => {
    fetch(API_REPORTS)
      .then((res) => res.json())
      .then((response) => setReports(response))
  }, [])


  // add new report
  const addReport = (e) => {
    e.preventDefault();
    const id = reports.length ? (reports[reports.length - 1].id + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newReport = { id, candidate: reportCandidate, company: reportCompany, phase: reportPhase, status: reportStatus, datetime };
    console.log(newReport)
    fetch(API_REPORTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReport)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        const allReports = [...reports, res];
        setReports(allReports);
        history.push('/admin/reports');
      });
  }


  return (
    <div className="Admin">
      <Sidebar />
      <main>
        <Switch>

          <Route exact path="/admin/candidates/new">
            <NewCandidate
              candidateName={candidateName}
              setCandidateName={setCandidateName}
              candidateImg={candidateImg}
              setCandidateImg={setCandidateImg}
              candidateBirthday={candidateBirthday}
              setCandidateBirthday={setCandidateBirthday}
              candidateTitle={candidateTitle}
              setCandidateTitle={setCandidateTitle}
              candidateEmail={candidateEmail}
              setCandidateEmail={setCandidateEmail}
              addCandidate={addCandidate}
            />
          </Route>
          <Route exact path="/admin/candidates/:id">
            <Candidate candidates={candidates} deleteCandidate={deleteCandidate} />
          </Route>
          <Route exact path="/admin/candidates">
            <Candidates
              candidates={searchCandidatesResults}
              searchCandidates={searchCandidates}
              setSearchCandidates={setSearchCandidates} />
          </Route>
          <Route exact path="/admin/candidates/edit/:id">
            <EditCandidate
              candidates={candidates}
              setCandidates={setCandidates}
              editCandidateName={editCandidateName}
              setEditCandidateName={setEditCandidateName}
              editCandidateImg={editCandidateImg}
              setEditCandidateImg={setEditCandidateImg}
              editCandidateBirthday={editCandidateBirthday}
              setEditCandidateBirthday={setEditCandidateBirthday}
              editCandidateTitle={editCandidateTitle}
              setEditCandidateTitle={setEditCandidateTitle}
              editCandidateEmail={editCandidateEmail}
              setEditCandidateEmail={setEditCandidateEmail}
              editCandidate={editCandidate}
            />
          </Route>
          

          <Route exact path="/admin/companies/new">
            <AddNewCompany
              addCompany={addCompany}
              newCompanyName={newCompanyName}
              setNewCompanyName={setNewCompanyName}
              newCompanyEmail={newCompanyEmail}
              setNewCompanyEmail={setNewCompanyEmail}
            />
          </Route>
          <Route exact path="/admin/companies/edit/:id">
            <EditCompany
              editCompany={editCompany}
              companies={companies}
              setCompanies={setCompanies}
              editCompanyName={editCompanyName}
              setEditCompanyName={setEditCompanyName}
              editCompanyEmail={editCompanyEmail}
              setEditCompanyEmail={setEditCompanyEmail}
            />
          </Route>
          <Route exact path="/admin/companies/:id">
            <Company 
            companies={companies}
            setCompanies={setCompanies}
            companyDelete={companyDelete}
            />
          </Route>
          <Route exact path="/admin/companies">
            <Companies 
            companies={searchCompaniesResults}
            searchCompanies={searchCompanies}
            setSearchCompanies={setSearchCompanies}
            />
          </Route>

          <Route exact path="/admin/reports">
            <Reports
              // candidates
              candidates={searchCandidatesResults}
              searchCandidates={searchCandidates}
              setSearchCandidates={setSearchCandidates}
              // reports
              reports={reports}
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
          </Route>
          <Route exact path="/admin/reports/:id">
            <Report />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default Admin;
