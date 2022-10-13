import { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import { BsEyedropper } from "react-icons/bs";
import { BsSdCard } from "react-icons/bs";
import { BsXOctagonFill } from "react-icons/bs";
import axios from "axios";

//const getTasks=axios.get("http://localhost:3000/tasks")
export default function TodoItem() {
  const [tasks, setTasks] = useContext(TodoContext);
  const [isEdit, setisEdit] = useState([]);
  const [updValue, setUpdValue] = useState([{}]);
  let [error, updateError] = useState(null);
  var temp = [];
  var t = {};
  let isResolved = false;

  // getTasks.then((res)=>{
  //   isResolved = true;
  //   const body=res.data;
  //   console.log(body)
  //   body.map((item) => {
  //     t.id = item.id;
  //     t.taskname = item.taskname;
  //     temp.push({ id: item.id, taskname: item.taskname });
  //     //console.log("in use effect");
  //   });
  // }).then((a) => setTasks([...tasks, ...temp]))
  
  useEffect(() => {
    console.log("in use effect");
    axios
      .get("http://localhost:3000/tasks")
      .then((res) => res.data)
      .then((body) => {
        body.map((item) => {
          t.id = item.id;
          t.taskname = item.taskname;
          temp.push({ id: item.id, taskname: item.taskname });
          console.log("in use effect");
        });
      })
      .then((a) => setTasks([...tasks, ...temp]));
    console.log(tasks);
  }, []);

  function updateItem(item, i, isEdit) {
    setisEdit([...isEdit, i]);
  }

  const onSave = async(i) =>{
    try{
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
    const res=await axios
      .put(`http://localhost:3000/tasks/${i}`, { taskname })
      // .then((res) => res.data)
      // .then((body) => {
      //   console.log("after PUT call", body.id, body.taskname);
      //   setTasks(
      //     tasks.map((item) => {
      //       if (item.id === body.id) {
      //         item.taskname = body.taskname;
      //         return item;
      //       }
      //       return item;
      //     })
      //   );
      // });
      const body=await res.data
      await console.log("after PUT call", body.id, body.taskname);
        setTasks(
          tasks.map((item) => {
            if (item.id === body.id) {
              item.taskname = body.taskname;
              return item;
            }
            return item;
          })
        )
    }
    catch(err){
      console.error(err);
      updateError(err);
    }
  }

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

  const deleteTask= async(i)=> {
    try{
    // const newtasks = tasks.filter((item) => item.id !== i);
    // setTasks(newtasks);
    await axios
      .delete(`http://localhost:3000/tasks/${i}`, {
        //method: "DELETE",
      })
      //.then((res) => res.data)
      // .then((res) => {
      //   const newtasks = tasks.filter((item) => item.id !== i);
      //   setTasks(newtasks);
      // });
      const newtasks = await tasks.filter((item) => item.id !== i);
      await  setTasks(newtasks);
    }
    catch(err){
      console.error(err);
      updateError(err);
    }
  }
  if (error) {
    throw error;
  }
  // if (!isResolved) {
  //   console.log(getTasks)
  //   throw getTasks;
  // }
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
              {/* <button variant="primary" onClick={() => onSave(i)}>
                save
              </button>{" "} */}
              <BsSdCard onClick={() => onSave(item.id)} />
            </li>
          ) : (
            <li className="list-group-item">
              {item.taskname}
              &nbsp;
              {/* <button
                variant="primary"
                onClick={() => updateItem(item, i, isEdit)}
              >
                Edit
              </button>{" "} */}
              <BsEyedropper
                onClick={() => updateItem(item.taskname, item.id, isEdit)}
              />
              &nbsp;
              {/* <button variant="primary" onClick={() => deleteTask(i)}>
                -
              </button> */}
              <BsXOctagonFill onClick={() => deleteTask(item.id)} />
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}
