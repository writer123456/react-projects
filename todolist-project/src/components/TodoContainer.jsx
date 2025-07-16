import React from 'react';
import Todo from './Todo';

function TodoContainer({todos,deleteTodo}){
    return(
        <div>
            {todos.map((todo,index) => {
               return (
               <Todo  key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
               )
               } 
    )}
  </div>
    )
}  


export default TodoContainer