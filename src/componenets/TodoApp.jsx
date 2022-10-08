import { useState } from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";
import TodoItem from "./TodoListItem";

export default function Todoapp() {
  const [tasks, setTasks] = useState([]);
  

  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
      <div className="container text-center">
        <h1>To do list</h1>
        <div>
          <Todo />
          <TodoItem />
        </div>
      </div>
    </TodoContext.Provider>
  );
}
