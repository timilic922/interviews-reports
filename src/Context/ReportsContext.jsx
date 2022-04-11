import { createContext, useState, useEffect } from "react";

const ReportsContext = createContext({});

export const ReportsProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <ReportsContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        reports,
        setReports,
      }}
    >
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsContext;
