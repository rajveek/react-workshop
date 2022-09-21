

import Todo from "./Todo";

export default function Body({ inputValue,setInputValue,tasks,setTasks }) {
  return (
    <div>
      <h1>body</h1>
      <Todo inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}