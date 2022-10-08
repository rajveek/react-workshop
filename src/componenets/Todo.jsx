import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import {BsPlusLg} from "react-icons/bs";
import {BsSortAlphaUp} from "react-icons/bs";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useContext(TodoContext);

  function addTodo(e) {
    setTasks(tasks.concat(inputValue));
    setInputValue("");
  }
  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function sortList() {
    const sort = tasks.sort();
    setTasks([...sort]);
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={updateVal}
        placeholder="Add Task"
      ></input><t/>
      {/* <button onClick={addTodo} variant="primary" className="bi bi-plus">
        +
      </button>
      <button onClick={sortList} variant="primary" className="bi bi-plus">
        Sort
      </button> */}
      
      <BsPlusLg onClick={addTodo} variant="primary" /> <t/>
      <BsSortAlphaUp onClick={sortList} variant="primary"/>
    </div>
  );
}
