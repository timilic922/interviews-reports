import React, { useState } from 'react';

const StepTwo = ({ companies, searchCompanies, setSearchCompanies, reportCompany, setReportCompany, reportCandidate, handleNextStep, handlePrevStep }) => {

    console.log('selected candidate:' + reportCandidate)
    console.log('selected Company:' + reportCompany)

    return (
        <>
            {companies.length ? (
                <form className='select' onSubmit={handleNextStep}>
                    <div className="searchBox">
                        <form className='searchInput' onSubmit={(e) => e.preventDefault()}>
                            <input
                                className='search'
                                id='searchCompanies'
                                type="text"
                                placeholder='Name | Phone | Email | Education'
                                value={searchCompanies}
                                onChange={(e) => setSearchCompanies(e.target.value)} />
                        </form>
                        {/* <IoSearchCircleSharp className='searchIcon' /> */}
                    </div>
                    <div className="select">
                        <select id="selectCandidate" name="selectCandidate" size="5">
                            {companies.map(company => (
                                <option
                                    tabIndex={'0'}
                                    key={company.id}
                                    value={company.id}
                                    onClick={(e) => {
                                        setReportCompany(company)
                                    }}>{company.name}</option>
                            ))}
                        </select>
                        <div className="btns">
                            <input type="button" className='btnWizzard btnWizzardNext' value={'Back'} onClick={handlePrevStep} />
                            {reportCompany ? <input type="submit" className='btnWizzard btnWizzardNext' value={'Next'} /> : <input type="submit" className='btnWizzard btnWizzardNext_disabled' value={'Next'} disabled />}
                        </div>

                    </div>
                </form>
            ) : (
                <p className='noItems'>Nista za prikaz</p>
            )}
        </>
    )
}

export default StepTwo