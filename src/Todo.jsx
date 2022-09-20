import { useState } from "react";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTodo(e) {
    setTasks(tasks.concat(inputValue));
    setInputValue("");
  }
  function updateVal(e) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <h1>To do list</h1>
      <input value={inputValue} onChange={updateVal}></input>
      <button onClick={addTodo}>Add</button>
      {tasks.map((item, i) => (
        <li key={i}> {item}</li>
      ))}
    </div>
  );
}
