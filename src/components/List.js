import React from "react";
import Card from "./Card";

export default function List(props) {
  console.log(props);
  const cards = props.cards.map((card) => <Card onCardDelete={props.onCardDelete} onCardMove={props.onCardMove} key={card.id} {...card} />);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>{cards}</ul>
    </section>
  );
}
