import { Route, Routes, useRoutes } from "react-router";

// COMPONENTS
import MonsterCard from "../../components/MonsterCard/MonsterCard";
import MonsterDetails from "../../components/MonsterDetails";

// UTILS
import { APP_ROUTES } from "../../utils/routes";

const MainRouter = ({ routes = [] } = {}) => {
  let element = useRoutes(routes);
  return element;
};

export default MainRouter;

// const MainRouter2 = () => {
//   return (
//     <Routes>
//       {APP_ROUTES.map((route, idx) => {
//         const { path, element } = route;
//         return <Route key={idx} {...{ path, element }} />;
//       })}

//       <Route path="/monster/:monsterName" element={<MonsterCard />}>
//         <Route path="details" element={<MonsterDetails />} />
//       </Route>
//     </Routes>
//   );
// };
