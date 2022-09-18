import { useState } from "react";

export default function Greeting() {
    const [inputValue,setInputValue]=useState("")
    function newText(e){
        setInputValue(e.target.value)
    }
    
    return(
        <div >
        <h1>greeting component</h1>.
        <input value={inputValue} onChange={newText}></input>
        <h1>{inputValue}</h1>
        </div>
    );
}