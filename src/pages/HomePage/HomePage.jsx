import React from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox.component";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useMonster } from "../../context/MonstersContext";
import { useSearchContext } from "../../context/SearchContext";

const HomePage = ({ children, ...restProps }) => {
  const { monsters, error, isLoading } = useMonster();
  const { isSearching, debouncedValue, handleSearch } = useSearchContext();
  const filteredMonsters = monsters?.filter((monster) =>
    monster.name.toLowerCase().includes(debouncedValue.toLocaleLowerCase())
  );

  const resQty = monsters?.length;
  const filteredResQty = filteredMonsters?.length;
  const searchCondition = filteredMonsters?.length === 0;
  const placeholder = isSearching || `Search ${filteredResQty} Monsters...`;

  if (isLoading) {
    return <div>...loading </div>;
  }

  if (error) {
    return (
      <>
        <h1>Error</h1>
        <p>{error}</p>
      </>
    );
  }
  return (
    <div className="container2 mt-3">
      <h1>HomePage</h1>

      <SearchBox
        {...{
          placeholder,
          isSearching,
          onChange: handleSearch
        }}
      />
      <span>
        <small>
          Showing {filteredResQty} of {resQty} monsters
        </small>
      </span>

      <SearchResults
        {...{
          condition: searchCondition,
          filteredMonsters
        }}
      />

      {children}
    </div>
  );
};

export default HomePage;
