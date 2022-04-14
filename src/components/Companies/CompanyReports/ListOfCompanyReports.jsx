import { useState, useEffect } from 'react'
// import ReportListItem from './CompanyReportsListItem'
import CompanyReportsListItem from './CompanyReportsListItem'

function ListOfCompanyReports({ id, reports }) {

    const companyReports = reports.filter(report =>
        report.company.id === id);

    return (

        <div className="CandidateReports">
            <div className="listAll">
                
                <div className='container'>
                <p className='reportsFor'>Reports</p>
                    {companyReports.map((e) => (
                        <CompanyReportsListItem key={e.id} report={e} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListOfCompanyReports

