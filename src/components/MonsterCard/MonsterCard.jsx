import React from "react";
import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";

const MonsterCard = () => {
  const { monsterName } = useParams();
  return (
    <div>
      <h1>MONSTER</h1>
      <h3>
        ID: <small>{monsterName}</small>
      </h3>

      <div
        className="box"
        style={{ padding: "2em", border: "1px solid white" }}
      >
        <div>BOX</div>
        <Outlet />
        <button>
          <Link to="details">Details</Link>
        </button>
      </div>
    </div>
  );
};

export default MonsterCard;
