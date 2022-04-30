import React from 'react'
import { Link } from "react-router-dom"
import ListOfCompanies from './ListOfCompanis'

const Companies = ({ searchCompanies, setSearchCompanies, companies }) => {
  return (
    <div className='AllPage'>
      <div className="topBar">
        <h2>Companis</h2>
        <Link
          to="/admin/companies/new"
          className='LinkBtn'>
          <div className='btn btnAddNew'>add new</div>
        </Link>
      </div>

      <div className='container'>
        <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
          <input
            className='search'
            type="text"
            id="search"
            placeholder='Search Companies'
            value={searchCompanies}
            onChange={(e) => setSearchCompanies(e.target.value)} />
        </form>
        {companies.length ? (
          <ListOfCompanies companies={companies} />
        ) : (
          <p className='noItems'>There is no companies</p>
        )}

      </div>
    </div>
  )
}
export default Companies
