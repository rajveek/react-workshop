import axios from "axios";

export const callAddTodo = (taskname) =>
  axios.post("http://localhost:3000/tasks", { taskname });

export const deleteTodo =(i)=>
axios.delete(`http://localhost:3000/tasks/${i}`);

export const editTodo =(array)=>{
const i=array[0];
const taskname=array[1]
axios.put(`http://localhost:3000/tasks/${i}`, {
        taskname,
      });
    }