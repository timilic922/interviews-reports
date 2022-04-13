import { Link, useParams } from "react-router-dom";

const Company = ({ companies, companyDelete }) => {
  const { id } = useParams();

  const company = companies.find(company => (company.id).toString() === id);
  console.log(companies);
  return (
    <div className="CompanyPage">
      <article className="company">
        {company && (
          <>
            <h1>{company.name}</h1>
            <h2>{company.email}</h2>
            <button on onClick={() => { companyDelete(company.id) }}>
              Delete Company
            </button>
            <Link to={`/admin/companies/edit/${id}`}><button>Edit Company</button></Link>
          </>
        )}
      </article>
    </div>
  );
}
export default Company;