import React from 'react';
import { Link } from "react-router-dom";
import ListOfCandidates from './ListOfCandidates';
import { IoSearchCircleSharp } from "react-icons/io5";


const Candidates = ({ candidates, searchCandidates, setSearchCandidates }) => {

  return (
    <div className='listAll'>
      <div className="topBar">
        <h2>Candidates</h2>
        <Link
          to='/admin/candidates/new'
          className='LinkBtn'>
          <div className='btn btnAddNew'> Add New </div>
        </Link>
      </div>
      
      <div className="container">
        
          <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
            <input
              className='search'
              type="text"
              placeholder='Name | Phone | Email | Education'
              value={searchCandidates}
              onChange={(e) => setSearchCandidates(e.target.value)} />
          </form>
          {/* <IoSearchCircleSharp className='searchIcon'/> */}
        
        {candidates.length ? (
          <ListOfCandidates candidates={candidates} />
        ) : (
          <p className='noItems'>Nista za prikaz</p>
        )}

      </div>
    </div>
  )
}

export default Candidates