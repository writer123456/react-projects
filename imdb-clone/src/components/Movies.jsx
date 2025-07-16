import { useEffect, useState} from 'react';
import React from 'react';
import Banner from './Banner';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movies = ({handleAddToWatchList,watchlist,handleRemoveFromWatchlist}) => {

    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=43d31c996dbacb432fb6db82b3608e5c&language=en-US&page=${page}`)
        .then((response)=>{
            // console.log(response.data);
            setMovies(response.data.results)
            setPage(response.data.page)
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    const prevPage = () => {
        if(page>1){
            setPage(page-1)
        }
    }


    return (
        <>
        <div>
            <h1>Trending Movies</h1>
        </div>
{/* the url to get all the movies form the IMDB database is
https://api.themoviedb.org/3/movie/popular?api_key=43d31c996dbacb432fb6db82b3608e5c&language=en-US&page=1 */}
        <div className="flex flex-row flex-wrap justify-around gap-[10px]">
            {movies.map((movie,key)=>{
                return <MovieCard movie={movie} handleAddToWatchList={handleAddToWatchList} watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} key={key}/>
            })}
        </div>
        <div className="h-[5vh] pt-10px mt-[1vh] flex Justify-center" style={{backgroundColor:"grey", justifyContent:"center"}}>
            <div className="flex" onClick={prevPage}><i class="fa-solid fa-arrow-left px-[8] mr-[8px]"></i></div>
            <div className="flex">{page}</div>
            <div className="flex" onClick={()=>setPage(page+1)}><i class="fa-solid fa-arrow-right p-8 ml-[8px]"></i></div>
        </div>
        </>
    );
}

export default Movies;