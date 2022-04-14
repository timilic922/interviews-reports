import CompanyListItem from './CompanyListItem'

function ListOfCompanies({ companies }) {
    return (
        <div className="List">
            {companies.map((e) => (
                <CompanyListItem key={e.id} company={e} />
            ))}
        </div>
    )
}
export default ListOfCompanies