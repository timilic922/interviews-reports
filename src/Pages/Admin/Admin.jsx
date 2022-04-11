import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListOfCandidates from '../../components/ListOfCandidates/ListOfCandidates'
import ListOfCompanis from '../../components/ListOfCompanis/ListOfCompanis'
import ListOfReports from '../../components/ListOfReports/ListOfReports'
import "./admin.scss"
function Container() {
  
  return (
    <div className='container'>
        


      <div className='middel'>
      <Sidebar/>
      
      <Switch>
          <Route path="/container/Candidates">
        <ListOfCandidates/>
        </Route>

        <Route path="/container/Companies"> 
        <ListOfCompanis/>
        </Route>

        <Route path="/container/Reports">
        <ListOfReports/>
        </Route>

        </Switch>
        </div>       

    </div>
  )
}

export default Container
