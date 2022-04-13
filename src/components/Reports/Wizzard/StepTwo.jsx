import React, { useState } from 'react'
import ListOfCandidates from '../../Candidates/ListOfCandidates'

const StepTwo = ({reportCompany, setReportCompany, reportCandidate, handleNextStep,handlePrevStep }) => {

    console.log('selected candidate:' + reportCandidate)
    console.log('selected Company:' + reportCompany)

    return (
        <>

            <form className='select' onSubmit={handleNextStep}>
                <label htmlFor="selectCandidate">Select the Company</label>
                <div className="searchBox">
                    <form className='searchInput'>
                    </form>
                    {/* <IoSearchCircleSharp className='searchIcon' /> */}
                </div>
                <div className="select">
                    <select id="selectCandidate" name="selectCandidate" size="8">
                        <option
                            tabIndex={'0'}
                            key='copmany1'
                            value='copmany1'
                            onClick={(e) => setReportCompany(e.target.value)}>copmany1</option>
                        <option
                            tabIndex={'0'}
                            key='copmany2'
                            value='copmany2'
                            onClick={(e) => setReportCompany(e.target.value)}>copmany2</option>
                    </select>
                    <input type="button" onClick={handlePrevStep} value='back'/>
                    {reportCompany ? <input type="submit" /> : <input type="submit" disabled />}

                </div>
            </form>

        </>
    )
}

export default StepTwo