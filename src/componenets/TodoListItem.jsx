import { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import { BsEyedropper } from "react-icons/bs";
import {BsSdCard} from "react-icons/bs";
import {BsXOctagonFill} from "react-icons/bs";

export default function TodoItem() {
  const [tasks, setTasks] = useContext(TodoContext);
  const [isEdit, setisEdit] = useState([]);
  var temp=[]
  
  useEffect(()=>{
   
    console.log("in use effect")
    fetch("http://localhost:3000/tasks")
    .then(res=>res.json())
    .then(body=>{ body.map(item=>{
      temp.push(item.taskname);
      
    }
  )
}).then(a=>setTasks([...tasks,...temp]))
    
  },[])

  function updateItem(item, i, isEdit) {
    setisEdit([...isEdit,i]);
  }

  function onSave(item,i) {
    const newisEdit = isEdit.filter((item, o) => item !== i);
    setisEdit(newisEdit);
    const taskname = item

    fetch(`http://localhost:3000/tasks/${i}`,{
      method:'PUT',
      body:JSON.stringify({taskname}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(res => res.json())
    .then(body => console.log(body))

  }

  function onUpdate(e, item, i) {
    setTasks(
      tasks.map((item, id) => {
        if (id === i) {
          item = e.target.value;
          return item;
        }
        return item;
      })
    );
  }

  function deleteTask(i) {
    const newtasks = tasks.filter((item, o) => o !== i);
    setTasks(newtasks);
    fetch(`http://localhost:3000/tasks/${i}`, {
  method: 'DELETE',
});
  }

  return (
    <div>
      {tasks.map((item, i) => (
        <ul key={i} className="list-group">
          {isEdit.includes(i)? (
            <li className="list-group-item">
              <input
                defaultValue={item}
                onChange={(e) => onUpdate(e, item, i)}
              ></input>
              {/* <button variant="primary" onClick={() => onSave(i)}>
                save
              </button>{" "} */}
              <BsSdCard onClick={() => onSave(item,i)} />
            </li>
          ) : (
            <li className="list-group-item">
              {item}
              &nbsp;
              {/* <button
                variant="primary"
                onClick={() => updateItem(item, i, isEdit)}
              >
                Edit
              </button>{" "} */}
              <BsEyedropper onClick={() => updateItem(item, i, isEdit)}/>
              &nbsp;
              {/* <button variant="primary" onClick={() => deleteTask(i)}>
                -
              </button> */}
              <BsXOctagonFill onClick={() => deleteTask(i)}/>
            </li>
          )}
        </ul>
      ))}
    </div>
  );
}
