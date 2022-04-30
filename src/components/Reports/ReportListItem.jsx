import { Link, useRouteMatch } from 'react-router-dom'
import { IoCheckmarkDoneCircleSharp, IoCloseCircleSharp, IoTrashOutline} from "react-icons/io5";
import { IoPeopleSharp, IoBusinessSharp, IoDocumentTextSharp } from "react-icons/io5";

const ReportListItem = ({ report, reportsDelete }) => {
  const { url } = useRouteMatch();

  return (
    <div  className="ListItem ListItem-report">
    <Link to={`${url}/${report.id}`} className="ListItem-link">
      <div className="ListItem-data_main">
        <h5><IoBusinessSharp/> {report.company.name}</h5>
        <h5><IoPeopleSharp/> {report.candidate.name}</h5>
      </div>
      <div className="ListItem-data ListItem-data_phase">
        <p>{report.phase}</p>
      </div>
      <div className="ListItem-data ListItem-data_status">
        {report.status === 'passed' ? (
         <> <IoCheckmarkDoneCircleSharp className="ListItem-icon ListItem-icon_passed"/>
          <p>{report.status}</p></>
        ) : (
          <><IoCloseCircleSharp className="ListItem-icon ListItem_icon_declined"/>
          <p>{report.status}</p></>
        )
        }
      </div>
      </Link>
      
      </div>
  )
}

export default ReportListItem
