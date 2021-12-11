import React from "react";

export default function Card(props) {
  console.log(props);
  function onDelete() {
    props.onCardDelete(props.id);
  }
  function onMove(where) {
    props.onCardMove(props.id, where);
  }
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <button onClick={onDelete}>Delete me</button>

      <button onClick={() => onMove("done")}> Move to Done</button>
    </li>
  );
}
