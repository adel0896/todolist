import React from "react";
import Form from "./Form";

export default function Side(props) {
  return (
    <aside>
      Add a new task to the list:
      <Form onFormSubmit={props.onFormSubmit} />
    </aside>
  );
}
