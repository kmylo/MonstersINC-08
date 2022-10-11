import React from "react";
import { CardList } from "../CardList/CardList.component";

const SearchResults = ({ condition, filteredMonsters }) => {
  return (
    <>
      {condition ? (
        <div
          style={{
            backgroundColor: "#EBB400",
            color: "#fff",
            padding: "20px"
          }}
        >
          NO RESULTS!!
        </div>
      ) : (
        <CardList monsters={filteredMonsters} />
      )}
    </>
  );
};

export default SearchResults;
