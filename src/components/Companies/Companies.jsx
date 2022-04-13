import React from 'react'
import {Link} from "react-router-dom"
import ListOfCompanis from './ListOfCompanis'

const Companies = ({searchCompanies, setSearchCompanies, companies}) => {
  return (
      <>
      <div className='top-bar'>
        <h1>Companis</h1>
        <Link to="/admin/companies/new"><button>Add New</button></Link>
      </div>
    <div className='container'>
      <form action="searchForm" onSubmit={(e)=> e.preventDefault()}>
          <label htmlFor="search">Search Companies</label>
          <input type="text"
                id="search"
                placeholder='Search Companies'
                value={searchCompanies}
                onChange={(e)=> setSearchCompanies(e.target.value)} />
      </form>
      <ListOfCompanis companies={companies}/>
    </div>
    </>
  )
}
export default Companies