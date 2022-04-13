import React, { useState } from 'react'
import ListOfCandidates from '../../Candidates/ListOfCandidates'
// 
const StepOne = ({ candidates, searchCandidates, setSearchCandidates, reportCandidate,setReportCandidate, handleNextStep  }) => {

console.log(reportCandidate)

    return (
        <>
            {candidates.length ? (
                <form className='select' onSubmit={handleNextStep}>
                    <label htmlFor="selectCandidate">Select the Candidate</label>
                    <div className="searchBox">
                        <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
                            <input
                            className='search'
                                id='searchCandidates'
                                type="text"
                                placeholder='Name | Phone | Email | Education'
                                value={searchCandidates}
                                onChange={(e) => setSearchCandidates(e.target.value)} />
                        </form>
                        {/* <IoSearchCircleSharp className='searchIcon' /> */}
                    </div>
                    <div className="select">
                        <select id="selectCandidate"  name="selectCandidate" size="8">
                            {candidates.map(candidate => (
                                <option 
                                tabIndex={'0'}
                                key={candidate.id}
                                value={candidate.id}
                                onClick={(e)=> {
                                    setReportCandidate(candidate)
                                
                                }}>{candidate.name}</option>
                            ))}
                        </select>
                        {reportCandidate ? <input type="submit" className='btnWizzard btnWizzardNext' /> : <input type="submit" className='btnWizzard btnWizzardNext_disabled' disabled/>}
                        
                    </div>
                </form>
            ) : (
                <p className='noItems'>Nista za prikaz</p>
            )}
        </>
    )
}

export default StepOne