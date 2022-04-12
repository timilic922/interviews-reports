import React from 'react'
import CompanieListItem from './CompanieListItem'

function ListOfCompanis({companies}) {
  return (
    <>
    {companies.map((e)=>(
      <CompanieListItem key={e.id} company={e}/>
    ))}
      
    </>
  )
}

export default ListOfCompanis
