import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";

import Login from "../components/Login";
import MonsterCard from "../components/MonsterCard/MonsterCard";
import MonsterDetails from "../components/MonsterDetails";
import ProtectedRoute from "../components/ProtectedRoute";

const ServerSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = (e) => {
    console.log({ target: e.target });
  };
  return <h1>Server Search</h1>;
};

// create app routes and inner module routes (nested)

export const APP_NAV_LINKS = [
  {
    data: { title: "Home" },
    path: "/",
  },
  {
    data: { title: "Search" },
    path: "/search-page",
  },
  {
    data: { title: "Server Search" },
    path: "/server-search",
  },
  {
    data: { title: "Monster Pepe" },
    path: "/monster/pepe",
  },
];

export const APP_ROUTES = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search-page",
    element: (
      <ProtectedRoute>
        <SearchPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/server-search",
    element: <ServerSearch />,
  },
  {
    path: "/monster/:monsterName",
    element: (
      <ProtectedRoute>
        <MonsterCard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "details",
        element: <MonsterDetails />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
