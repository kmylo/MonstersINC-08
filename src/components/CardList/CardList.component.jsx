import { Card } from "../Card/Card.component";
import "./CardList.styles.scss";

//functional component
export const CardList = ({ monsters, ...props }) => {
  return monsters == null ? (
    <div className="container">cargando...</div>
  ) : (
    <div className="card-list">
      {monsters.map((monster, idx) => {
        //console.log(idx);
        monster.id = idx;
        return <Card key={idx} monster={monster} />;
      })}
    </div>
  );
};
