import React, { useState } from 'react';
import './addfilm.css';

const Addfilm = (props) => {
    const {setMovie, searchResults,setSearched,searched,addtoWatchlist,addtoWatched,isClicked, setIsClicked} = props;
    const [film,setFilm] = useState();

    function handleSubmit (event) {
        event.preventDefault();
        setMovie(film);
        setSearched(true);
    }

    return (
        <>
            <div className='add-page'>
                <div className="add-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search ...' onChange={(e) => setFilm(e.target.value)}/>
                        {searched ? <>
                            <div className="movies">
                            {searchResults.map((result)=>{
                                return(
                                    <div className="movie" key={result.id}>
                                        <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.title}/>
                                        <div className="movie-information">
                                            <h5 className='movie-name'>{result.title}</h5>
                                            <h5 className="movie-year">{result.release_date}</h5>
                                            <div className="buttons">
                                                <button onClick={() => {addtoWatchlist(result)}}>ADD TO WATCH LIST</button>
                                                <button onClick={() => addtoWatched(result)}>ADD TO WATCHED</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        </> : null}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Addfilm
