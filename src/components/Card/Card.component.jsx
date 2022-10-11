import React from "react";
import "./Card.styles.scss";
import { imgURL01, QSTR01 } from "../../utils/endpoint";

//functional component
export const Card = ({ monster, hidden = true }) => {
  const { id, name } = monster;
  const IMG_URL = `${imgURL01}${id}?${QSTR01}`;
  return (
    <div className="card-container">
      <Debugger {...{ data: monster, hidden: true }} />

      {/* <p>{IMG_URL}</p> */}
      <img src={IMG_URL} alt="monster" loading="lazy" />
      <h2>{name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

const Debugger = ({ hidden = true, data }) => (
  <pre style={{ textAlign: "left" }} hidden={hidden}>
    {data ? <code>{JSON.stringify(data, null, 2)}</code> : <code>NO DATA</code>}
  </pre>
);
