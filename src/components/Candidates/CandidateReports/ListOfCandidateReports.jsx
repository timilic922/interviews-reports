import { useState, useEffect } from 'react'
import CandidateReportsListItem from './CandidateReportsListItem'

function ListOfCandidateReports({ id, reports }) {

    const candidateReports = reports.filter(report =>
        report.candidate.id === id);

    return (

        <div className="CandidateReports">
            <div className="listAll">
                <div className='container'>
                <h5 className='reportsFor'>Reports</h5>
                    {candidateReports.map((e) => (
                        <CandidateReportsListItem key={e.id} report={e} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListOfCandidateReports

