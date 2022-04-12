import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Candidates from '../../components/Candidates/Candidates';
import AddNewCompany from "../../components/Companies/AddNewCompany"
import Company from "../../components/Companies/Company"
import Companies from '../../components/Companies/Companies';
import Reports from '../../components/Reports/Reports'
import { useState, useEffect } from "react";
import "./admin.scss";
function Admin() {
  const [companies, setCompanies]=useState([])
  const [searchCompanies, setSearchCompanies]=useState("");
  const [searchCompaniesResults, setSearchCompaniesResults]=useState([])
  const [newCompanyName, setNewCompanyName]=useState("")
  const [newCompanyEmail, setNewCompanyEmail]=useState("")
  const histroy=useHistory()




  // fech Kompanija
  useEffect(()=> {
    fetch("http://localhost:3500/companies")
    .then((res) => res.json())
    .then((res) => setCompanies(res));
    },[])




    // / filter kompanija
  useEffect(() => {
    const filterResults = companies.filter(company =>
      ((company.name).toLowerCase()).includes(searchCompanies.toLowerCase())
      || ((company.email).toLowerCase()).includes(searchCompanies.toLowerCase()))
      setSearchCompaniesResults(filterResults.reverse());
  }, [companies, searchCompanies])



 // Fatch za nove kompanije
  useEffect(()=>{
      const filteredComapanies=companies.filter(e=>(((e.name).toLowerCase().includes(searchCompanies.toLowerCase()))
      || ((e.email).toLowerCase()).includes(searchCompanies.toLowerCase()))
       )

       setSearchCompaniesResults(filteredComapanies.reverse())
  }, [companies, searchCompanies])


// Create New Company funkcija
const companySubmit=(e)=>{
  e.preventDefault();
  const id=companies.length?companies[companies.length-1].id +1 : 1
  const newCompany={id, name:newCompanyName, email:newCompanyEmail}
  const allCompanies=[ ...companies, newCompany]
  setCompanies(allCompanies)
  setNewCompanyName("")
  setNewCompanyEmail("")
  histroy.push("/")

}
  // DELETE COMPANY
  const companyDelete=(id)=>{
    fetch(`http://localhost:3500/companies/${id}`, {
      method:"DELETE",
      headers : {
        "Content-Type" : "application/json"} })
    .then((res)=>res.json())
    .then(() => {
      const companyList = companies.filter(candidate => candidate.id !== id);
      setCompanies(companyList)});   
    histroy.push("/admin/companies")

  }

  return (
    
    <div className="wrapper">
        <Sidebar />
        <main>
        <Switch>
        <Route exact path="/admin/companies/new">
            <AddNewCompany 
            companySubmit={companySubmit} newCompanyName={newCompanyName} setNewCompanyName={setNewCompanyName}
            newCompanyEmail={newCompanyEmail} setNewCompanyEmail={setNewCompanyEmail} 
            />
          </Route>
        <Route path="/admin/companies/:id">
            <Company companies={companies} setCompanies={setCompanies} companyDelete={companyDelete} />
          </Route>
          
          <Route exact path="/admin/candidates">
            {/* <Candidates /> */}
            Kandidati
          </Route>
          

          <Route exact path="/admin/companies">
            <Companies companies={searchCompaniesResults} searchCompanies={searchCompanies}  setSearchCompanies={setSearchCompanies}  />
            kompanije
          </Route>

          

          <Route exact path="/admin/reports">
            {/* <Reports /> */}
            izvestaji
          </Route>
        </Switch> 
        </main>
  </div>
  );
}

export default Admin;
