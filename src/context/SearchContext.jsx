import * as React from "react";
import { useDebounce } from "react-use";
import { APP_TXT } from "../utils/constants";
import { useSnackBar } from "./SnackBarContext";

const SearchContext = React.createContext();
SearchContext.displayName = "SearchContext";

const { loadingSearch } = APP_TXT;

function SearchProvider({ children }) {
  const [searchField, setSearchField] = React.useState("");
  const [debouncedValue, setDebouncedValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const {
    // openSnackBar,
    setOpenSnackbar,
    // snackBarMsg,
    setSnackBarMsg
  } = useSnackBar();

  const [, cancel] = useDebounce(
    () => {
      setIsSearching(false);
      setDebouncedValue(searchField);
    },
    1500,
    [searchField]
  );
  const handleSearch = React.useCallback(
    ({ currentTarget }) => {
      setIsSearching(true);
      setSearchField(currentTarget.value);
      setOpenSnackbar(true);
      setSnackBarMsg(loadingSearch);
    },
    [setOpenSnackbar, setSnackBarMsg]
  );

  const value = React.useMemo(
    () => ({ isSearching, debouncedValue, handleSearch, cancel }),
    [isSearching, debouncedValue, handleSearch, cancel]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useMonster must be used within a SearchProvider");
  }
  return context;
}

export { SearchProvider, useSearchContext };
