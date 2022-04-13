import React from 'react';

const NewCandidate = ({ addCandidate, candidateName, setCandidateName, candidateImg, setCandidateImg, candidateBirthday, setCandidateBirthday, candidateTitle, setCandidateTitle, candidateEmail, setCandidateEmail }) => {
  return (
    <>
      <div className="topBar">
        <h2>Add New Candidate</h2>
      </div>
      <div className="container">
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
            <span>please use url</span>
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
          <div className='candidateEmail'>
            <label htmlFor="">Email</label>
            <input
              id='candidateEmail'
              type="text"
              className='addInput'
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
            />
          </div>
          <button type='submit'>Save Candidate</button>

        </form>
      </div>
    </>
  )
}

export default NewCandidate