import { useState, useEffect } from "react";
import React from 'react';
import genres from '../utility/utility';

const Watchlist = ({watchlist,setWatchlist}) => {

    const[searchTerm, setSearchTerm] = useState("");
    const[genreList, setGenreList] = useState(['All Genre']);
    const[currentGenre, setCurrentGenre] = useState('All Genre');
    console.log(genres);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // console.log(searchTerm);
    }

    const handleSortUp = () => {
        let sortedWatchlist=watchlist.sort((a,b)=>a.vote_average-b.vote_average);
        setWatchlist([...sortedWatchlist]);
        console.log(sortedWatchlist);
    }

    const handleSortDown = () => {
        let sortedWatchlist=watchlist.sort((b,a)=>a.vote_average-b.vote_average);
        setWatchlist([...sortedWatchlist]);
        console.log(sortedWatchlist);
    }

    const extractGenreName  = (movieGenre_id) => {
        let genreObj= genres.filter((genre,key)=>{return genre.id==movieGenre_id});
        return genreObj[0].name;
    }

    const getGenreList = () => {    
        let genreList=[];
        watchlist.map((movie,key)=>{
            genreList.push(extractGenreName(movie.genre_ids[0]));
        })
        genreList=new Set(genreList);
        return genreList;
    }

    const handleGenreClick = (genre) => {
        setCurrentGenre(genre);
        // let watchlist_as_per_genre=watchlist.filter((movie,key)=>{
        //     return extractGenreName(movie.genre_ids[0])==genre;
        // }
        // )
        // console.log('watchlist_as_per_genre');
        // setWatchlist([...watchlist_as_per_genre]);
    }

    useEffect(()=>{
        let watchlistGenre=getGenreList();
        console.log(watchlistGenre);
        setGenreList([genreList,...watchlistGenre]);
    },[watchlist])


    return (
        <>
            <div className="flex justify-center my-4">
                {genreList.map((genre,key)=>{
                    return(
                        (genre==currentGenre)?<div className="flex justify-center h-[2rem] w-[6rem] rounded-xl text-center bg-rounded mb-[2rem] items-center mr-[1rem]" onClick={()=>(handleGenreClick(genre))} style={{backgroundColor:"blueviolet", borderRadius:"8px", textAlign:'center',cursor:"pointer"}}>{genre}</div>:<div className="flex justify-center h-[2rem] w-[6rem] rounded-xl text-center bg-rounded mb-[2rem] items-center mr-[1rem]" onClick={()=>(handleGenreClick(genre))} style={{backgroundColor:"grey", borderRadius:"8px", textAlign:'center',cursor:"pointer"}}>{genre}</div>
                        
                    )
                })}
                
                {/* <div className="flex justify-center h-[2rem] w-[6rem] rounded-xl text-center bg-rounded mb-[2rem] items-center mr-[1rem]" style={{backgroundColor:"grey", borderRadius:"8px", textAlign:'center'}}>Action</div> */}
            </div>
            <div className="flex justify-center my-4" >
                <input type="text" placeholder="Search for movies" onChange={(e)=>(handleSearch(e))} className="h-[1.5rem] w-[18rem] outline-none px-4 background-grey-400"/>
            </div>

            <div className="flex border-2  border-grey-200 m-[8vh]">
                <table className="w-full text-center text-lg" style={{color:"black"}}>
                    <thead className="bg-grey-200 border-2" style={{backgroundColor:"grey"}}>
                        <tr>
                            <th>Movie Name</th>
                            <th>Release Date</th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th className="flex justify-center gap-[2px]">
                            <i class="fa-sharp fa-solid fa-arrow-up" onClick={handleSortUp}></i>
                             <div classname="mr-[2px] ml-[2px]">Rating</div>
                            <i class="fa-sharp fa-solid fa-arrow-down" onClick={handleSortDown}></i>
                            </th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>

                        {watchlist.filter((movie,key)=>{
                            const isGenreMatch = currentGenre === 'All Genre' || extractGenreName(movie.genre_ids[0]) === currentGenre;
                            const isSearchMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
                            return isGenreMatch && isSearchMatch;
                        }).map((movie,key)=>{
                            return(
                                <tr key={key}>
                                    <td>
                                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie" className="h-[100px] w-[100px]"/>
                                        <div>{movie.title}</div>
                                    </td>
                                    <td>{movie.release_date}</td>
                                    <td>{movie.popularity}</td>
                                    <td>{extractGenreName(movie.genre_ids[0])}</td>
                                    <td>{movie.vote_average}</td>
                                    <td><i class="fa-solid fa-trash"></i></td>
                                </tr>
                            )
                        }
                        
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Watchlist;