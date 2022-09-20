
export default function Counter({count,setCount}) {
    
    return(
        <div>
        <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    );
}