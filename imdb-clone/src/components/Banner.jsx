import React from 'react';
import '../index.css';

const Banner = () => {
    return (
        <>
        <div className="h-[70vh] bg-cover filter brightness-125 contrast-150" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgt29LPKsqizHI7hKHR7tjvn3CD6ckmtIVuW_YM-sDZ3rDuJIzUCpw1Ok&s)'}}>
            {/* <h1>Welcome to IMDB Clone</h1>
            <p>Your source for movie information</p> */}
        </div>
        <div className="text-center" style={{color:'white',backgroundColor:"navy",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"}}>Sherlock Homes</div>
        </>
    );
};

export default Banner