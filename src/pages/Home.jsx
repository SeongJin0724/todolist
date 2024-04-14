import React, { useState } from "react";
import Main from "../components/section/Main";
import TodoInfo from "../components/contents/TodoInfo";
import TodoList from "../components/contents/TodoList";

export default function Home() {
  const [reload, setReload] = useState(false);

  const refreshTodos = () => {
    setReload(!reload);
  };
  return (
    <Main>
      <TodoInfo onAddTodo={refreshTodos} />
      <TodoList reload={reload} />
    </Main>
  );
}
