import { Link, useRouteMatch } from 'react-router-dom'
import { IoCheckmarkDoneCircleSharp, IoCloseCircleSharp, IoTrashOutline} from "react-icons/io5";

const ReportListItem = ({ report, count }) => {
  const { url } = useRouteMatch();

  return (
    <Link to={`${url}/${report.id}`} className="ListItem">
      <div className="ListItem-data_header">
        <p>{count}</p>
        <h5>{report.company.name}</h5>
        <div className="space">|</div>
        <h5>{report.candidate.name}</h5>
      </div>
      <div className="ListItem-data">
        <p>{report.phase}</p>
      </div>
      <div className="ListItem-data">
        {report.status === 'passed' ? (
         <> <IoCheckmarkDoneCircleSharp style={{ color: 'blue' }} className="ListItem-data_icon"/>
          <p>{report.status}</p></>
        ) : (
          <><IoCloseCircleSharp style={{ color: 'red' }} className="ListItem-data_icon"/>
          <p>{report.status}</p></>
        )
        }
      </div>
      <div className="ListItem-data deleteItem">
        <button><IoTrashOutline/></button>
      </div>
    </Link>
  )
}

export default ReportListItem
