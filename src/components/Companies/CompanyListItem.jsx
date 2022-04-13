import { Link, useRouteMatch } from 'react-router-dom'

const CompanyListItem= ({company}) => {
    const { url } = useRouteMatch();
  return (

        <Link to={`${url}/${company.id}`} className="ListItem">
            <h4>{company.name}</h4>
            <p>{company.email}</p>
        </Link>

  )
}


export default CompanyListItem