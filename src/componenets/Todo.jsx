import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSortAlphaUp } from "react-icons/bs";
import axios from "axios";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useContext(TodoContext);
  let [error, updateError] = useState(null);

  const addTodo =async(e)=> {
    try{
    setInputValue("");
    const taskname = inputValue;
    var temp = [];
    const res=await axios.post("http://localhost:3000/tasks", { taskname })
    // .then((res) => {
    //   temp.push(res.data);
    //   console.log("body :", res.data);
    //   setTasks([...tasks, ...temp]);
    // });
    await temp.push(res.data);
    console.log("body :", res.data);
    await setTasks([...tasks, ...temp]);
    }
    catch(err){
        console.error(err);
        updateError(err);
      }
    
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
