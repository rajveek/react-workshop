
import './App.css';
import { useState } from "react";
import Head from './componenets/head';
import Body from './componenets/body';

function App(props) {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
   <Head inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTasks={setTasks}/>
   <Body inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTasks={setTasks}/>
   </div>
  );
}

export default App;
