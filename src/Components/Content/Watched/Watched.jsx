import React from 'react'

const Watched = ({watched}) => {
  return (
    <>
      <div className="header">
            <h1>Watched List</h1>
            <h5>7 Movies</h5>
        </div> 
        <div className="movie-list">
          {watched.map((movie) => {
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

export default Watched
