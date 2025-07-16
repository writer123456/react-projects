import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css';  // or './styles.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';
import Banner from './components/Banner';


function App() {
  const [count, setCount] = useState(0)
  const [watchlist, setWatchlist] = useState([])

  const handleAddToWatchList = (movie) => {
    const newWatchList=[...watchlist, movie];
    setWatchlist(newWatchList);
    console.log(newWatchList);
    localStorage.setItem('movieWatchlist',JSON.stringify(newWatchList));
}

function handleRemoveFromWatchlist(movie){      
  let newWatchList = watchlist.filter((item)=>item.id!==movie.id);
  setWatchlist(newWatchList);
  // console.log(newWatchList);
  localStorage.setItem('movieWatchlist',JSON.stringify(newWatchList));
}

useEffect(()=>{
  const movieWatchlist = JSON.parse(localStorage.getItem('movieWatchlist'))??[];
  setWatchlist(movieWatchlist);
  console.log("useEffect called");
},[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<><Banner /><Movies handleAddToWatchList={handleAddToWatchList} watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} /></>} />
            <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist}/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
