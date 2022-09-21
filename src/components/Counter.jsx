import { useContext } from "react";
import {counterContext} from "../contexts"

export default function Counter() {
    const [count, setCount]=useContext(counterContext) 

    return(
        <div>
        <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    );
}