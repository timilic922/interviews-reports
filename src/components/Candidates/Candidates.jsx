import React from 'react';
import { Link } from "react-router-dom";
import ListOfCandidates from './ListOfCandidates';
import { IoSearchCircleSharp } from "react-icons/io5";


const Candidates = ({ candidates, searchCandidates, setSearchCandidates }) => {

  return (
    <div className='AllPage'>
      <div className="topBar">
        <h2>Candidates</h2>
        <Link
          to='/admin/candidates/new'
          className='LinkBtn'>
          <div className='btn btnAddNew'>add new</div>
        </Link>
      </div>

      <div className="container">
        <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
          <input
            // role='searchbox'
            className='search'
            type="text"
            placeholder='Name | Phone | Email | Education'
            value={searchCandidates}
            onChange={(e) => setSearchCandidates(e.target.value)} />
        </form>
        {candidates.length ? (
          <ListOfCandidates candidates={candidates} />
        ) : (
          <p className='noItems'>There is no candidates</p>
        )}

      </div>
    </div>
  )
}

export default Candidates