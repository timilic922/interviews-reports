import CandidateListItem from "./CandidateListItem"

const ListOfCandidates = ({candidates}) => {
  return (
    <div className="List">
        {candidates.map(candidate => (
            <CandidateListItem key={candidate.id} candidate={candidate}/>
        ))}
    </div>
  )
}

export default ListOfCandidates