import React from 'react'
import {Link} from "react-router-dom"

function CompanieListItem({company}) {
  return (
    <article className='company-item'>
        <Link to={`/admin/companies/${company.id}`}>
            <h2>{company.name}</h2>
            <h3>{company.email}</h3>
            <span>11.04.2022</span>
            {/* position [] treba jos ubaciti */}
        </Link>
    </article>
  )
}

export default CompanieListItem
