import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function TodoInfo({ onAddTodo }) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { content, completed: false };

    fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setContent("");
        onAddTodo();
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="오늘의 할일!!"
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </>
  );
}
