import React from 'react';

const MovieCard = ({movie,handleAddToWatchList,watchlist,handleRemoveFromWatchlist}) => {

    function checkWatchList(movie){
        let flag = false;
        watchlist.map((item)=>{
            if(item.id === movie.id){
                flag = true;
            }
        })
        return flag;
    }

    
    
    return (
        
        <>
        <div className="h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:cursor-pointer" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`, hoover: "cursor-pointer" }}>
        {checkWatchList(movie)?<div onClick={()=>(handleRemoveFromWatchlist(movie))}>&#10060;</div>:<div className="flex justify-right h-[8vh] m-[4px]" onClick={()=>(handleAddToWatchList(movie))}>&#129293;</div>}
        </div>
        </>
        
    );
}

export default MovieCard;