import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import { BsEyedropper } from "react-icons/bs";
import {BsSdCard} from "react-icons/bs";
import {BsXOctagonFill} from "react-icons/bs";

export default function TodoItem() {
  const [tasks, setTasks] = useContext(TodoContext);
  const [isEdit, setisEdit] = useState([]);

  function updateItem(item, i, isEdit) {
    setisEdit([...isEdit,i]);
  }

  function onSave(i) {
    const newisEdit = isEdit.filter((item, o) => item !== i);
    setisEdit(newisEdit);
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
              <BsSdCard onClick={() => onSave(i)} />
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
