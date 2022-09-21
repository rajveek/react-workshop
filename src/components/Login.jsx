import { useState } from "react";

export default function Login(){

    const [name,setName]=useState('');

    return(
        <div>
            <h1>hello</h1>
            <form>
            <div class="mb-3">
                <input 
                placeholder="enter your email address" 
                type="email"
                />
                <br></br>
                <input placeholder="enter 8 digit password" type="password"></input>
                <br></br>
                <input 
                placeholder="enter your name" 
                type="text"
                onChange={e=>setName(e.target.value)}
                value={name}
                ></input>
            </div>
            </form>
        </div>
    );
}