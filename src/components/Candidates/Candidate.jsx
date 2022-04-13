import { Link, useParams } from 'react-router-dom';
import { IoCalendarOutline, IoArrowBackCircleOutline } from "react-icons/io5";

const Candidate = ({ candidates, deleteCandidate }) => {
  const { id } = useParams();
  const candidate = candidates.find(candidate => (candidate.id).toString() === id);

  return (
    <div className='SinglePage'>
      <div className="topBar">
        <Link to="/admin/candidates" className='btnBack'>
          <IoArrowBackCircleOutline /><h6>Candidates</h6>
        </Link>

        <div className='options'>
          <div className='header'>
            <h2>{candidate.name}</h2>
            <span>{candidate.datetime}</span>
          </div>
          <div className='btns'>
            <button onClick={() => deleteCandidate(candidate.id)}>Delete</button>
            <Link to={`/admin/candidates/edit/${id}`} className='btn'>
              Edit
            </Link>
            {/* <button onClick={() => editCandidate(candidate.id)}>Delete</button> */}
          </div>
        </div>
      </div>
      <div className='info'>
        {candidate &&
          <div className='showInfo'>
            <img src={candidate.img} className='candidateImg' alt="" />
            <div className="showInfo-data">
              <h4>{candidate.name}</h4>
              <p><IoCalendarOutline className='showInfo-data_icon' /> {candidate.birthday}</p>
              <p>title: {candidate.title}</p>
              <p>email: {candidate.email}</p>
            </div>
          </div>

        }
      </div>
    </div>
  )
}

export default Candidate