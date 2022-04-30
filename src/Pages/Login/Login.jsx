import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { IoChevronForwardOutline } from 'react-icons/io5'

import "./login.scss"

function Login({ setIsLogedIn }) {

  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [err, setErr] = useState(false)

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
        } else {
          setErr(true);
          setUser({
            email: "",
            password: ""
          })
        }
      })
  }

  return (
    <div className='login'>
      <div className='loginContainer'>
      <div className="logo">interview tracker</div>
        {err && <div className='login-err'>
          <p>Password or/and email are not correct</p>
          <p>Please try again</p>
        </div>}
        <form action="" onSubmit={submitUser}>
        <div className='input__container'>
          
          <label>Email</label>
          <input type="text" className='' value={user.email} name="email" onChange={(e) => setUser({
            ...user,
            email: e.target.value
          })} />
        </div>
        <div className='input__container'>
          <label>Password</label>
          <input type="password" value={user.password} name="email" onChange={(e) => setUser({
            ...user,
            password: e.target.value
          })} />
        </div>
        <div className="container-btn">
          <button id='btnLogin' className='btn  btnAddNew' type="submit">Login<IoChevronForwardOutline /></button>
        </div>
        </form>
      </div>

    </div >
  )
}

export default Login
