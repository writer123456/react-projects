import React from 'react';
import IMDBLogo from '../clapper.png';
import Movies from './Movies';
import Watchlist from './Watchlist';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="bg-gray-800 h-16 flex items-center gap-20">
                <img className="w-[50px] mr-20" src={IMDBLogo} alt="IMDB Logo" />
                <Link className="block max-w-sm p-6 no-underline gap-20 mr-20" to='/' style={{padding: '20px', fontSize:"20px"}}>Movies</Link>
                <Link className="block max-w-sm p-6 no-underline" to='/watchlist' style={{fontSize:"20px"}}>Watchlist</Link>
            </div>
        </nav>
    );
};

export default Navbar;