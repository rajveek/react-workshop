import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSortAlphaUp } from "react-icons/bs";
import axios from "axios";
import {  useQuery, useQueryClient } from "@tanstack/react-query";

export default function Todo() {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const [, ] = useContext(TodoContext);
  let [error, updateError] = useState(null);
  const { data: tasks } = useQuery(
    ["todos"],
    () => {
      return axios.get("http://localhost:3000/tasks").then((res) => res.data);
    },
    { useErrorBoundary: true ,suspense:true}
  );
  const addTodo =async(e)=> {
    try{
    setInputValue("");
    const taskname = inputValue;
    
    const res=await axios.post("http://localhost:3000/tasks", { taskname })
    
    queryClient.setQueryData(['todos'],[...tasks,res.data])
    
    console.log("body :", res.data);
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
    
    const sor=tasks.sort((a, b) => {
      let fa = a.taskname.toLowerCase(),
          fb = b.taskname.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  })
  console.log(sor)
  queryClient.setQueryData(["todos"], sor);
  console.log("tasks :",tasks)
  }

  if (error) {
    throw error;
  }
  return (
    <div>
      <input
        value={inputValue}
        onChange={updateVal}
        placeholder="Add Task"
      ></input>

      
      <BsPlusLg onClick={addTodo} variant="primary" />
      <BsSortAlphaUp onClick={sortList} variant="primary" />
    </div>
  );
}
