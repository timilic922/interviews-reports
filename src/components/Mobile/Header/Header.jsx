import React from 'react'
import { Link } from 'react-router-dom';
import {IoLogOutSharp} from 'react-icons/io5'

const Header = () => {
    const logOut = () => {
        const flag = false;
        if (!flag) {
          <Link to="/"></Link>;}
      };
  return (
    <header>
        <div className="logo">logo</div>
        <button className="logOut" onClick={logOut}><IoLogOutSharp/></button>
    </header>
  )
}

export default Header