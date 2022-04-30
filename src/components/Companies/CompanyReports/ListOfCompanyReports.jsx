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
            <h5 className='reportsFor'>Reports</h5>
                    {companyReports.map((e) => (
                        <CompanyReportsListItem key={e.id} report={e} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListOfCompanyReports

