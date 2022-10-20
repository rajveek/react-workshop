import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsEyedropper } from "react-icons/bs";
import { BsSdCard } from "react-icons/bs";
import { BsXOctagonFill } from "react-icons/bs";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteTodo, editTodo } from "./todoAxios";

export default function TodoItem() {
  const queryClient = useQueryClient();
  const [,] = useContext(TodoContext);
  const [isEdit, setisEdit] = useState([]);
  const [updValue] = useState([{}]);
  //let [error, updateError] = useState(null);

  const deletem = useMutation(deleteTodo, {
    onSuccess: (data, variable) => {
      queryClient.setQueryData(
        ["todos"],
        tasks.filter((item) => item.id !== variable)
      );
    },
  });

  const editm = useMutation(editTodo,{onSuccess:(data,variable)=>{queryClient.setQueryData(
    ["todos"],
    tasks.map((item) => {
      if (item.id === variable[0]) {
        return { ...item, taskname: variable[1] };
      }
      return item;
    })
  );}});

  const { data: tasks, isLoading } = useQuery(
    ["todos"],
    () => {
      return axios.get("http://localhost:3000/tasks").then((res) => res.data);
    },
    { useErrorBoundary: true }
  );
  if (isLoading) {
    return null;
  }

  const deleteTask = async (i) => {
    deletem.mutate(i);
  };

  function updateItem(item, i, isEdit) {
    setisEdit([...isEdit, i]);
  }

  const onSave = async (i) => {
    const newisEdit = isEdit.filter((item, o) => item !== i);
    setisEdit(newisEdit);
    var taskname = "";
    console.log(updValue);
    updValue.map((item) => {
      console.log("in updvalue ;", item);
      if (item.id === i) {
        taskname = item.taskname;
        console.log(item.taskname, item.id);
        return item;
      }
      return item;
    });

    console.log("id:", i);
    const array = [i, taskname];
    editm.mutate(array);

    
  };

  function onUpdate(e, item, i) {
    console.log("inital upd val lenght :", updValue.length);

    updValue.map((item) => {
      if (item.id === i) {
        console.log("in if");
        item.taskname = e.target.value;
        return item;
      } else {
        console.log("in else");

        updValue.push({ id: i, taskname: e.target.value });

        return item;
      }
    });
  }

  return (
    <div>
      {tasks.map((item) => (
        <ul key={item.id} className="list-group">
          {isEdit.includes(item.id) ? (
            <li className="list-group-item">
              <input
                defaultValue={item.taskname}
                onChange={(e) => onUpdate(e, item, item.id)}
              ></input>

              <BsSdCard onClick={() => onSave(item.id)} />
            </li>
          ) : (
            <li className="list-group-item">
              {item.taskname}
              &nbsp;
              <BsEyedropper
                onClick={() => updateItem(item.taskname, item.id, isEdit)}
              />
              &nbsp;
              <BsXOctagonFill onClick={() => deleteTask(item.id)} />
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}
