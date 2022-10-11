import { Link } from "react-router-dom";
import NavScrollExample from "../components/NavScrollExample";

// UTILS
import { APP_TXT } from "../utils/constants";
const { appTitle } = APP_TXT;

// const nav = {};

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="App ">
        <header>
          <MainNav />
        </header>
        {children}
        <footer>SOME FOOTER</footer>
      </div>
    </>
  );
};

export default MainLayout;

const TitleHeader = ({ appTitle = "APPTITLE" }) => (
  <div className="title">
    <h5 className="mx-auto lead text-light">{appTitle}</h5>
  </div>
);

const MainNav = () => {
  return (
    <nav className="navbar navbar-dark fixed-top2 bg-dark">
      <TitleHeader {...{ appTitle }} />
      <hr className="d-lg-none text-white-50" />
      {/* <NavScrollExample /> */}
      <TutoNav />
    </nav>
  );
};

const TutoNav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search-page">Search</Link>
      </li>
      {/* <li>
        <Link>Other</Link>
      </li> */}
      <li>
        <Link to="/monster/pepe">Monster Pepe</Link>
      </li>
    </ul>
  );
};
