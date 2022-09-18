import { useState } from "react";

export default function Counter() {
    const [count,setCount]=useState(0)
    function incCounter(){
        setCount(count+1)
    }
    function decCounter(){
        if(count>0){
        setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
    return(
        <div >
        <h1>{count}</h1>.
        <button onClick={incCounter}>Increase</button>
        <button onClick={decCounter}>Decrease</button>
        <div>
        <button onClick={reset}>Reset</button>
        </div>
        
        </div>
    );
}