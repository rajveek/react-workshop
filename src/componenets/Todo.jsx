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
  function deleteTask(i) {
    //const tasks = tasks.filter((item) => item.id !== i);
    setTasks(tasks);
  }
  return (
    <div className="container text-center">
      <h1>To do list</h1>
      <input value={inputValue} onChange={updateVal}></input>
      <button onClick={addTodo} variant="primary" className="bi bi-plus">
        +
      </button>
      {tasks.map((item, i) => (
        <ul class="list-group">
          <li key={i} class="list-group-item">
            
            <input value={item}></input>
            &nbsp;<button variant="primary">Edit</button> &nbsp;
            <button variant="primary" >
              -
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
