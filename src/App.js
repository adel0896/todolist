import React, { useState } from "react";
import Side from "./components/Side";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "Homework",
      list: "todo",
      added: 1543445354344,
      id: 1,
      description: "Write the report.",
      assignedTo: ["jofh"],
    },
    {
      title: "Clean the apartment",
      list: "todo",
      added: 1543445354344,
      id: 2,
      description: "Wash dishes and vacuum",
      assignedTo: ["jofh"],
    },
    {
      title: "Send E-mails",
      list: "todo",
      added: 1543445354344,
      id: 3,
      description: "Answer to the new emails",
      assignedTo: ["jofh"],
    },
  ]);
  function onFormSubmit(data) {
    console.log("form submitted", data);
    setCards(cards.concat(data));
  }
  function onCardMove(id, whereTo) {
    const nextCards = cards.map((card) => {
      if (card.id === id) {
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }
  function onCardDelete(id) {
    const nextCards = cards.filter((card) => card.id !== id);
    setCards(nextCards);
  }
  return (
    <div className="App">
      <Side onFormSubmit={onFormSubmit} />
      <Main onCardDelete={onCardDelete} onCardMove={onCardMove} cards={cards} />
    </div>
  );
}
