import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Greeting from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Greeting name='Rajvee' style={{fontStyle: 'italic',fontSize:30}}/>
    <Greeting name='Shruti' style={{fontWeight: 'bold',fontSize:25}}/>
    <Greeting name='Ridham' style={{textDecoration: 'underline',fontSize:20}}/>
    <Greeting name='Somya'/>
  </React.StrictMode>,
  document.getElementById("root")
);

