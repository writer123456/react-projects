import React from 'react'
import Hello from './components/Hello'
import Message from './components/Message'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
function App() {
  // const [count, setCount] = useState(0)
// const array = ["Apple", "Mango", "Banana", "Strawberry", "Orange"]
const user={
  name:"Adam",
  age:25,
  address:"USA"
}
  return (
    <>
      {/* <Hello name="Adam"/>
      <Hello name="Bob"/>
      <Hello name="Charlie"/> */}
      {/* <Hello {...user}/> */}
      {/* <Message/> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        <Counter />
    </>
  )
}

export default App
