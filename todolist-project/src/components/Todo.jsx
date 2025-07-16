import React from 'react';

function Todo({index,todo,deleteTodo}){
    console.log(index);
    return(
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor:"blueviolet",marginTop:"10px",padding:"10px",borderRadius:"10px" }}>
    <div style={{width:'200px'}}><p style={{ whiteSpace: 'nowrap', margin: 0 }}>{todo}</p>
    </div>  
    <button onClick={()=>deleteTodo(index)} style={{ fontSize: '0.5em', marginLeft: '10px', width: '40px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Done</button>
  </div>  
  ) 
}
export default Todo;
