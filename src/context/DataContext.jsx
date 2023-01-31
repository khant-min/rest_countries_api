import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [requireCountry, setRequireCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [detail, setDetail] = useState();
  const [changeDetail, setChangeDetail] = useState("");

  return (
    <DataContext.Provider
      value={{
        requireCountry,
        setRequireCountry,
        filterByRegion,
        setFilterByRegion,
        detail,
        setDetail,
        changeDetail,
        setChangeDetail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
