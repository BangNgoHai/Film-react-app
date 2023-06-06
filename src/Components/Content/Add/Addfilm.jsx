import React, { useEffect, useState } from 'react';
import './addfilm.css';

const Addfilm = (props) => {
    const {setClicked,setAdded,setMovie, searchResults,setSearched,searched,addtoWatchlist,addtoWatched,click,add} = props;
    const [film,setFilm] = useState();

    function handleSubmit (event) {
        event.preventDefault();
        if(film) {
            setMovie(film);
            setSearched(true);
            setAdded([]);
            setClicked([]);
        }
    }

    const doSearch = (e) => {
        console.log("doSearch: " + e.target.value);
        setFilm(e.target.value)
    }

    return (
        <>
            <div className='add-page'>
                <div className="add-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search ...' onChange={(e) => doSearch(e)}/>
                    </form>
                        {searched ? <>
                            <div className="movies">
                            {searchResults.map((result)=>{
                                const isAdded = add.includes(result.id);
                                const isClicked = click.includes(result.id);
                                return(
                                    <div className="movie" key={result.id}>
                                        <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.title}/>
                                        <div className="movie-information">
                                            <h5 className='movie-name'>{result.title}</h5>
                                            <h5 className="movie-year">{result.release_date}</h5>
                                            <div className="buttons">
                                                <button disabled={isAdded} onClick={() => {addtoWatchlist(result)}}>ADD TO WATCH LIST</button>
                                                <button disabled={isClicked} onClick={() => addtoWatched(result)}>ADD TO WATCHED</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        </> : null}
                </div>
            </div>
        </>
    )
}

export default Addfilm
