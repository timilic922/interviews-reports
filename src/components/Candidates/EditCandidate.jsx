import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5'


const EditCandidate = ({ editCandidate, candidates, editCandidateName, setEditCandidateName, editCandidateImg, setEditCandidateImg, editCandidateBirthday, setEditCandidateBirthday, editCandidateTitle, setEditCandidateTitle, editCandidateEmail, setEditCandidateEmail }) => {

  const { id } = useParams();
  const candidate = candidates.find(candidate => (candidate.id).toString() === id);

  useEffect(() => {
    if (candidate) {
      setEditCandidateName(candidate.name)
      setEditCandidateImg(candidate.img)
      setEditCandidateBirthday(candidate.birthday)
      setEditCandidateTitle(candidate.title)
      setEditCandidateEmail(candidate.email)
    }
  }, [candidate, setEditCandidateName, setEditCandidateImg, setEditCandidateBirthday, setEditCandidateTitle, setEditCandidateEmail])


  return (
    <>
      <div className="topBar">
      <Link to="/admin/candidates" className='btnBack'>
          <IoArrowBackCircleOutline className='btnBack-icon'/><h6>Candidates</h6>
        </Link>
        <h2>Edit Candidate Info</h2>
      </div>
      <div className="container containerInputs">
        <form
          className='addNew'
          onSubmit={e => e.preventDefault()}
        >

          <div className='formControl'>
            <label htmlFor="candidateName">Candidate Name:</label>
            <input
              id='candidateName'
              type="text"
              className='addInput'
              
              value={editCandidateName}
              onChange={(e) => setEditCandidateName(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateImg">Candidate Img:
            </label>
            <input
              id='candidateImg'
              type="url"
              className='addInput'
              value={editCandidateImg}
              onChange={(e) => setEditCandidateImg(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateBirth">Birthday:</label>
            <input
              id='candidateBirth'
              type="date"
              className='addInput'
              value={editCandidateBirthday}
              onChange={(e) => setEditCandidateBirthday(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateTitle">Title</label>
            <input
              id='candidateTitle'
              type="text"
              className='addInput'
              value={editCandidateTitle}
              onChange={(e) => setEditCandidateTitle(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor="">Email</label>
            <input
              id='candidateEmail'
              type="text"
              className='addInput'
              value={editCandidateEmail}
              onChange={(e) => setEditCandidateEmail(e.target.value)}
            />
          </div>
          <button type='submit' className="btn btnSave" onClick={() => editCandidate(candidate.id)} >Save Candidate</button>

        </form>
      </div>
    </>
  )
}

export default EditCandidate