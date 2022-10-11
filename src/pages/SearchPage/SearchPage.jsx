import { Link } from "react-router-dom";

export const SearchPage = () => {
  // const monster = "/home";
  const monsters = ["cochinita", "chilki", "carnita", "quesadilla"];

  return (
    <>
      <h1>Search Page</h1>
      {/* <Link to={monster}>Monsters</Link> */}
      <ul>
        {monsters.map((monster) => {
          return (
            <li key={monster}>
              <Link to={`/monster/${monster}`}>{monster}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchPage;
