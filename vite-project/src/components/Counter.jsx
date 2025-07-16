import React, {useState} from "react";
import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [factor,setFactor]=useState(1); 

  function incrementCount() {
    setCount(count + factor);
  }

  function decrementCount() {
    setCount(count - factor);
  }

  function incrementFactor() {
    setFactor(factor + 1);
  } 

  function decrementFactor() {
    setFactor(factor - 1);
  }

  useEffect(() => {
    console.log("Counter component mounted or state changed");
  },[]);

  return (
    <div>
    <h1>This is my counter:{count}</h1>     
    <button onClick={incrementCount}>Increment</button>
    <button onClick={decrementCount}>Decrement</button>
    <h1>This is my factor:{factor}</h1>
    <button onClick={incrementFactor}>Increment</button>
    <button onClick={decrementFactor}>Decrement</button>
    </div>
  )   
}
export default Counter;