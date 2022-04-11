import React, { useState } from "react";
import Container from "./Pages/Container/Container";
import Login from "./Pages/Loogin/Login";
import {Link, Route} from "react-router-dom"
import { Switch } from "react-router-dom";
function App() {
  const[token, setToken]=useState("")
  const keepToken=(e)=>{
    setToken(e)
  }
  return (
    <div>
      <Switch>
      <Route exact path="/"><Login keepToken={keepToken}/></Route>
      {<Route path="/container">
      <Container/>
      </Route>}
      </Switch>

    </div>
  )
    
}

export default App;
