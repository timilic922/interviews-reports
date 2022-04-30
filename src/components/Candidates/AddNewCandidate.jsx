import React from 'react';
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline,IoSearchCircleSharp } from "react-icons/io5";

const NewCandidate = ({ addCandidate, candidateName, setCandidateName, candidateImg, setCandidateImg, candidateBirthday, setCandidateBirthday, candidateTitle, setCandidateTitle, candidateEmail, setCandidateEmail }) => {
  return (
    <>
      <div className="topBar">
      <Link to="/admin/candidates" className='btnBack'>
          <IoArrowBackCircleOutline className='btnBack-icon'/><h6>Candidates</h6>
        </Link>
        <h2>Add New Candidate</h2>
      </div>
      <div className="container containerInputs">
        <form
          className='addNew'
          onSubmit={addCandidate}>

          <div className='formControl'>
            <label htmlFor="candidateName">Candidate Name:</label>
            <input
              id='candidateName'
              type="text"
              className='addInput'
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateImg">Candidate Img:
            </label>
            <input
              id='candidateImg'
              type="url"
              className='addInput'
              value={candidateImg}
              onChange={(e) => setCandidateImg(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateBirth">Birthday:</label>
            <input
              id='candidateBirth'
              type="date"
              className='addInput'
              value={candidateBirthday}
              onChange={(e) => setCandidateBirthday(e.target.value)}
            />
          </div>

          <div className='formControl'>
            <label htmlFor="candidateTitle">Title</label>
            <input
              id='candidateTitle'
              type="text"
              className='addInput'
              value={candidateTitle}
              onChange={(e) => setCandidateTitle(e.target.value)}
            />
          </div>
          <div className='formControl'>
            <label htmlFor="">Email</label>
            <input
              id='candidateEmail'
              type="text"
              className='addInput'
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
            />
          </div>
          <button type='submit' className='bnt btnSave'>Save Candidate</button>

        </form>
      </div>
 </>
  )
}

export default NewCandidate