import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsPlusLg } from "react-icons/bs";
import { BsSortAlphaUp } from "react-icons/bs";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { callAddTodo } from "./todoAxios";

export default function Todo() {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const [,] = useContext(TodoContext);
  let [error] = useState(null);
  const { mutate } = useMutation(callAddTodo, {
    onSuccess: (data) => {
      queryClient.setQueryData(['todos'],[...tasks,data.data])
      setInputValue("")
    },
  });

  const { data: tasks } = useQuery(
    ["todos"],
    () => {
      return axios.get("http://localhost:3000/tasks").then((res) => res.data);
    },
    { useErrorBoundary: true, suspense: true }
  );
  const addTodo = async (e) => {
    mutate(inputValue);
    
  };
  function updateVal(e) {
    setInputValue(e.target.value);
  }
  function sortList() {
    const sor = tasks.sort((a, b) => {
      let fa = a.taskname.toLowerCase(),
        fb = b.taskname.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    console.log(sor);
    queryClient.setQueryData(["todos"], sor);
    console.log("tasks :", tasks);
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
