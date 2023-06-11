import React from 'react';


const Watchlist = (props) => {
  const {watchList} = props;
  const movies = watchList.length;
  return (
    <>
       <div className="header">
            <h1>My Watchlist</h1>
            <h5>{movies} Movies</h5>
        </div> 
        <div className="movie-list">
            {watchList.map((movie) => {
              return (
                <div className="movie-card" key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                </div>
              );
            })}
        </div>
    </>
  )
}

export default Watchlist
