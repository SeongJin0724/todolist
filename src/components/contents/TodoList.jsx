import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoList({ reload }) {
  const [todoData, setTodoData] = useState([]);
  const todo = async () => {
    try {
      const data = await axios.get("/api/todolist");
      setTodoData(data.data);
      console.log(data.data);
    } catch (err) {
      console.error("Todo 리스트를 불러오는 데 실패했습니다.", err);
    }
  };
  useEffect(() => {
    todo();
  }, [reload]);

  return (
    <ul className="todolist_ul">
      {todoData.map((item, index) => (
        <li key={index}>{item.content}</li>
      ))}
    </ul>
  );
}
