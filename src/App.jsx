import Head from './components/header';
import Body from './components/body';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
   <Head  count={count} setCount={setCount}/>
   <Body  count={count} setCount={setCount}/>
   </div>
  );
}

export default App;
