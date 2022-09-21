

import Todo from "./Todo";

export default function Head({ inputValue,setInputValue,tasks,setTasks }) {
  return (
    <div>
      <h1>head</h1>
      <Todo inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}