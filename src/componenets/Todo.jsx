import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSortAlphaUp } from "react-icons/bs";
import axios from "axios";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useContext(TodoContext);

  function addTodo(e) {
    setInputValue("");
    const taskname = inputValue;
    var temp = [];
    axios.post("http://localhost:3000/tasks", { taskname }).then((res) => {
      temp.push(res.data);
      console.log("body :", res.data);
      setTasks([...tasks, ...temp]);
    });
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
      ></input>

      {/* <button onClick={addTodo} variant="primary" className="bi bi-plus">
        +
      </button>
      <button onClick={sortList} variant="primary" className="bi bi-plus">
        Sort
      </button> */}
      <BsPlusLg onClick={addTodo} variant="primary" />
      <BsSortAlphaUp onClick={sortList} variant="primary" />
    </div>
  );
}
