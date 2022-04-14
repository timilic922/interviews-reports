import { Link, useRouteMatch } from 'react-router-dom'
import { IoCheckmarkDoneCircleSharp, IoCloseCircleSharp, IoTrashOutline } from "react-icons/io5";

const CandidateReportsListItem = ({ report }) => {
  const { url } = useRouteMatch();

  return (
    <div className="reportListItem">
      <Link to={`${url}/${report.id}`} className="CandidateReport">
        <div className="ListItem-data_header">
          <h5>{report.company.name}</h5>
        </div>
        <div className="ListItem-data">
          <p>{report.phase}</p>
        </div>
        <div className="ListItem-data">
          {report.status === 'passed' ? (
            <> <IoCheckmarkDoneCircleSharp style={{ color: 'blue' }} className="ListItem-data_icon" />
              <p>{report.status}</p></>
          ) : (
            <><IoCloseCircleSharp style={{ color: 'red' }} className="ListItem-data_icon" />
              <p>{report.status}</p></>
          )
          }
        </div>
      </Link>
    </div>
  )
}

export default CandidateReportsListItem
