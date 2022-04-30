import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function handleTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleNote(event) {
    const value = event.target.value;
    setNote(value);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />

        <textarea
          onChange={handleNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.AddTab(title, note);
            setTitle("");
            setNote("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
