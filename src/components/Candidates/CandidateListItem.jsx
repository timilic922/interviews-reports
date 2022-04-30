import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const CandidateListItem = ({ candidate }) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/${candidate.id}`} className="ListItem">
      <h4>&bull; {candidate.name}</h4>
      <p>{candidate.title}</p>
    </Link>
  )
}

export default CandidateListItem