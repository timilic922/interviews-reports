import CompanyListItem from './CompanyListItem'

function ListOfCompanis({ companies }) {
    return (
        <>
            {companies.map((e) => (
                <CompanyListItem key={e.id} company={e} />
            ))}
        </>
    )
}
export default ListOfCompanis