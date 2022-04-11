import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import "./login.scss"

function Login({ setIsLogedIn }) {

  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const submitUser = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then((res) => res.json())
      .then((res) => {
        if (res.accessToken) {
          setIsLogedIn(res.accessToken)
          localStorage.setItem('login', JSON.stringify(res.accessToken))
        }
      })
    // history.push("/");
  }

  return (
    <div>
      <Link to="/container"><p>LOgin</p></Link>
      <div className='log-wraper'>
        <div className='log-form'>
          <label>
            <p>Username</p>
            <input type="text" name="email" onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="email" onChange={(e) => setUser({
              ...user,
              password: e.target.value
            })} />
          </label>
          <div>
            <button type="submit" onClick={submitUser}>Submit</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login
