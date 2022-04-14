import { Link, useParams } from "react-router-dom";
import { IoCalendarOutline, IoArrowBackCircleOutline } from "react-icons/io5";

const Report = ({ reports, reportsDelete }) => {
  const { id } = useParams();

  const report = reports.find(report => (report.id).toString() == id);

  return (
    <div className='SinglePage'>
      <div className="topBar">
        <Link to="/admin/reports" className='btnBack'>
          <IoArrowBackCircleOutline /><h6>Reports</h6>
        </Link>

        <div className='options'>
          <div className='header'>
            <h2>report: <b>{report.id}</b></h2>
            <span>{report.datetime}</span>
          </div>
          <div className='btns'>
            <button className='btn' onClick={() => reportsDelete(report.id)}>Delete</button>
          </div>
        </div>
      </div>
      <div className='info'>
        {report &&
          <div className='showInfo'>
            <div className="showInfo-data">
              <h4><span>company: </span><Link to={`/admin/companies/${report.company.id}`}>{report.company.name}</Link></h4>
              <h4><span>candidate: </span><Link to={`/admin/candidates/${report.candidate.id}`}>{report.candidate.name}</Link></h4>
              <div className="line"></div>
              <div className="showInfo-data_report">
                <p><IoCalendarOutline className='showInfo-data_icon' /> Interview Date:{report.interviewDate}</p>
                <p>phase: {report.phase}</p>
                <p>status: {report.status}</p>
                <p>additional notes: {report.notes}</p>
              </div>
            </div>
          </div>

        }
      </div>
    </div>
  )
}

export default Report