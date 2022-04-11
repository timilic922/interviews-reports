import React, { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import { Route, Redirect, Switch } from "react-router-dom"
function App() {
  // const[token, setToken]=useState("")
  // const keepToken= (e)=>{
  //   return setToken(e)
  // }
  const [isLogedIn, setIsLogedIn] = useState(JSON.parse(localStorage.getItem('login')))
  //  setIsLogedIn(JSON.parse(localStorage.getItem('login')))
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




      {/* <Switch> */}
      {/* {!isLogedIn && <Switch>
        <Redirect from='/container' to='/' />
        <Route path='/' component={Login} />
      </Switch>} */}
      {/* <Switch>
      <Route exact path="/"><Login /></Route>
      {<Route path="/container">
      <Container/>
      </Route>}
      </Switch>  */}

    </div>
  )

}

export default App;



