import { Link, useRouteMatch } from 'react-router-dom'
import { IoCheckmarkDoneCircleSharp, IoCloseCircleSharp, IoTrashOutline } from "react-icons/io5";

const CandidateReportsListItem = ({ report }) => {
  const { url } = useRouteMatch();

  return (
    <div className="reportListItem">
      <Link to={`/admin/reports/${report.id}`} className="ListItem CandidateReport">
        <div className="ListItem-data_header">
          <h5>&bull; {report.company.name}</h5>
        </div>
        <div className="ListItem-data">
          <p>{report.phase}</p>
        </div>
        <div className="ListItem-data">
          {report.status === 'passed' ? (
            <> <IoCheckmarkDoneCircleSharp className="ListItem-icon ListItem-icon_passed" />
              <p>{report.status}</p></>
          ) : (
            <><IoCloseCircleSharp style={{ color: 'red' }} className="ListItem-icon ListItem_icon_declined" />
              <p>{report.status}</p></>
          )
          }
        </div>
      </Link>
    </div>
  )
}

export default CandidateReportsListItem
