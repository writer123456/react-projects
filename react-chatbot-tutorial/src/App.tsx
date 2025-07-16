import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import ChatComponent from './Components/ChatComponent';

const App:React.FunctionComponent=()=>{
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-6 rounded-lg shadow-md overflow-hidden">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md">
        <ChatComponent />
      </div>
    </div>
      
  )
}

export default App
