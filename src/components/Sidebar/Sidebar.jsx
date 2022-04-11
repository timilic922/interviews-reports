import React from 'react'
import {Link} from "react-router-dom"
import "./sidebar.scss"

function Sidebar() {
  const logOut=()=>{
    const flag=false;
    if(!flag){
    <Link to="/"></Link>}
  }
  return (

    <div className='wraper'>
    <       div className='wraper-sidebar'>
    
            <div className='options'>
            <Link to="/container/Candidates"><p>Canidates</p></Link>
            <Link to="/container/Companies"><p>Companies</p></Link>
            <Link to="/container/Reports"><p>Reports</p></Link>
            </div>
            <Link to="/"> <button onClick={logOut}>LogOut</button></Link>

            </div>
            </div>
  )
}

export default Sidebar
