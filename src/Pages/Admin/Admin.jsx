import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Candidates from '../../components/Candidates/Candidates';
import Companies from '../../components/Companies/Companies';
import Reports from '../../components/Reports/Reports'
import "./admin.scss";
function Container() {
  return (
    <div className="wrapper">
        <Sidebar />
        <main>
        <Switch>
          <Route path="/admin/candidates">
            {/* <Candidates /> */}
            Kandidati
          </Route>

          <Route path="/admin/companies">
            {/* <Companies /> */}
            kompanije
          </Route>

          <Route path="/admin/reports">
            {/* <Reports /> */}
            izvestaji
          </Route>
        </Switch> 
        </main>
  </div>
  );
}

export default Container;
