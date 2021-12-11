import React from "react";
import List from "./List";
export default function Main({ cards, onCardDelete, onCardMove }) {
  console.log(cards);
  return (
    <main>
      <List onCardDelete={onCardDelete} onCardMove={onCardMove} cards={cards.filter((c) => c.list === "todo")} header="To Do" />
      <List onCardDelete={onCardDelete} onCardMove={onCardMove} cards={cards.filter((c) => c.list === "done")} header="Done" />
    </main>
  );
}
