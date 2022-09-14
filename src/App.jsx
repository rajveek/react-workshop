import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  
  return (
    <p style={ props.style} >
  Hello {props.name}
    </p>
  );
}

export default Greeting;
