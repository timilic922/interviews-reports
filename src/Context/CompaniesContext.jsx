import { createContext, useState, useEffect } from 'react';

const CompaniesContext = createContext({});

export const CompaniesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <CompaniesContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        companies,
        setCompanies,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export default CompaniesContext;