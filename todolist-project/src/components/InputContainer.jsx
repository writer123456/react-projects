import { useState } from "react";
import React from 'react';

function InputContainer({inputVal,writeTodo,addTodo}){

    
    // const handleInput = (e) => {
    //     setInputVal(e.target.value);
    // }
    // const handleClick = () => {
    //     console.log(inputVal);
    // }   
    return( <div className="input-container">
        <input onChange={writeTodo} type="text" placeholder="Add a new task" value={inputVal}/>
        <button onClick={addTodo} style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>+</button>
      </div>);
}
export default InputContainer;