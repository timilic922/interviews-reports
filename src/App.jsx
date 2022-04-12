import React, { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import { Route, Redirect, Switch } from "react-router-dom"
function App() {
 
  const [isLogedIn, setIsLogedIn] = useState(JSON.parse(localStorage.getItem('login')))
  return (
    <div className="App">

      {!isLogedIn && <Switch>
        <Route path='/'><Login setIsLogedIn={setIsLogedIn} /></Route>
        <Redirect from='/admin' to='/' />
      </Switch>}
      {isLogedIn && <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from='/' to='/admin' />

      </Switch>}





    </div>
  )

}

export default App;



