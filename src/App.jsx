import Head from './components/header';
import Body from './components/body';
import './App.css';
import { useState } from 'react';
import {counterContext} from "./contexts"

function App() {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={[count,setCount]}>
    <div>
   <Head/>
   <Body/>
   </div>
   </counterContext.Provider>
  );
}

export default App;
