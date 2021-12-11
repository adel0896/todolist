import React, { useState } from "react";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submit(evt) {
    evt.preventDefault();
    props.onFormSubmit({
      title: title,
      list: "todo",
      added: Date.now(),
      id: Math.random(),
      description: description,
      assignto: ["jofh"],
    });
    setTitle("");
    setDescription("");
  }

  function titleChanged(e) {
    setTitle(e.target.value);
  }
  function descriptionChanged(e) {
    setDescription(e.target.value);
  }
  return (
    <form onSubmit={submit}>
      <label>
        <h3>Title</h3>
        <input type="text" name="title" value={title} onChange={titleChanged} />
      </label>
      <label>
        <h3>Description</h3>
        <input type="text" name="description" value={description} onChange={descriptionChanged} />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}
