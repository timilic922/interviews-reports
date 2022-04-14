import ReportListItem from './ReportListItem'

const ListOfReports = ({ reports }) => {

    return (
        <div className="List">
            {reports.map(report => (
                <ReportListItem key={report.id} report={report} />
            ))}
        </div>
    )
}
export default ListOfReports