import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'

function App() {
  const [inputVal,setInputVal] = useState('');
  const [todos,setTodos] = useState([]);

  function writeTodo (e){
    setInputVal(e.target.value);
  }

  function addTodo(){
    setTodos([...todos,inputVal]);
    setInputVal('');
  }
  function deleteTodo(index){
    console.log(todos.filter((todo,i) => i !== index));
    setTodos(todos.filter((todo,i) => i !== index));
  }
  console.log(todos);

  return (
   <main>
      
      <h1>To do List</h1>

      <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      
     <TodoContainer todos={todos} deleteTodo={deleteTodo}/>

     
   </main>
  )
}

export default App
