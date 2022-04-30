import React, { useState } from 'react';
// 
const StepOne = ({ candidates, searchCandidates, setSearchCandidates, reportCandidate, setReportCandidate, handleNextStep }) => {

    return (
        <>
            <div className="searchBox searchBox-m">
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
            {candidates.length ? (
                
                    <form className='select' onSubmit={handleNextStep}>
                    <div className="searchBox">
                    </div>
                        <select id="selectCandidate" name="selectCandidate" size="5">
                            {candidates.map(candidate => (
                                <option
                                    tabIndex={'0'}
                                    key={candidate.id}
                                    value={candidate.id}
                                    onClick={(e) => {
                                        setReportCandidate(candidate)
                                    }}>{candidate.name}</option>
                            ))}
                        </select>
                        <div className="btn-container btn-container1">
                            {reportCandidate ? <input type="submit" className='btnWizzard btnWizzardNext' value={'Next'} /> : <input type="submit" className='btnWizzard btnWizzardNext_disabled' value={'Next'} disabled />}
                        </div>
                    </form>
               
            ) : (
                <p className='noItems'>Nista za prikaz</p>
            )}
        </>
    )
}

export default StepOne