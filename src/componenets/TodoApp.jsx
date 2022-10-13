import { useState ,Suspense} from "react";
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";
//import TodoItem from "./TodoListItem";
import ErrorBoundary from "./ErrorBoudry";
import React from "react";

const TodoItem = React.lazy(() => import("./TodoListItem"));

export default function Todoapp() {
  const [tasks, setTasks] = useState([]);
  

  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
     <ErrorBoundary fallback={<h1>Something went wrong!!</h1>}>
     
      <div className="container text-center">
        <h1>To do list</h1>
        <div>
          <Todo />
          <Suspense fallback={<h1>Loading...</h1>}>
          <TodoItem />
          </Suspense>
        </div>
      </div>
      
      </ErrorBoundary>
    </TodoContext.Provider>
  );
}
