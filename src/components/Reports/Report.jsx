import { Link, useParams } from "react-router-dom";
import { IoCalendarOutline, IoArrowBackCircleOutline, IoChevronForwardOutline } from "react-icons/io5";

const Report = ({ reports, reportsDelete }) => {
  const { id } = useParams();

  const report = reports.find(report => (report.id).toString() == id);

  return (
    <div className='singlePage'>
    <div className="topBar">
        <Link to="/admin/reports" className='btnBack'>
          <IoArrowBackCircleOutline className='btnBack-icon'/><h6>Reports</h6>
        </Link>

        <div className='options'>
          <div className='header'>
            <h2>report: <b>{report.id}</b></h2>
            <span>{report.datetime}</span>
          </div>
          <div className='btns'>
            <button className='btn btnDelete' onClick={() => reportsDelete(report.id)}>Delete</button>
          </div>
        </div>
      </div>
      <div className='info'>
        {report &&
          <div id="showInfoCompany" className='showInfo'>
            <div className="showInfo-data">
              <h4><span>company: </span><Link to={`/admin/companies/${report.company.id}`}>{report.company.name}</Link></h4>
              <h4><span>candidate: </span><Link to={`/admin/candidates/${report.candidate.id}`}>{report.candidate.name}</Link></h4>
              <div className="line"></div>
              <div className="showInfo-data_report">
                <p><b>Date: </b><span className="interview-info">{report.interviewDate}</span></p>
                <p><b>Phase: </b><span className="interview-info">{report.phase}</span></p>
                <p><b>Status: </b><span className="interview-info">{report.status}</span></p>
                <p id="reportNotes"><b>Notes:</b><span className="interview-info">{report.notes}</span></p>
              </div>
            </div>
          </div>

        }
      </div>
    </div>
  )
}

export default Report