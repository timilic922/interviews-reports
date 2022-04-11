import { createContext, useState, useEffect } from 'react';

const CandidatesContext = createContext({});

export const CandidatesProvider = ({ children }) => {
    const [candidates, setCandidates] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    return (
      <CandidatesContext.Provider
        value={{
          search,
          setSearch,
          searchResults,
          setSearchResults,
          candidates,
          setCandidates,
        }}
      >
        {children}
      </CandidatesContext.Provider>
    );
  };
  
  

export default CandidatesContext;