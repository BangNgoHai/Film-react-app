import React from 'react';
import './addfilm.css';

const Addfilm = () => {
  return (
    <>
        <div className='add-page'>
            <div className="add-container">
                <input type="text" placeholder='Search ...'/>
                <div className="movies">
                    <div className="movie">
                        <img src="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg" alt="" />
                        <div className="movie-information">
                            <h5 className='movie-name'>Avenger:Infinity War</h5>
                            <h5 className="movie-year">2019</h5>
                            <div className="buttons">
                                <button className="add-btn">ADD TO WATCH LIST</button>
                                <button className="add-btn">ADD TO WATCHED</button>
                            </div>
                        </div>
                    </div>
                    <div className="movie">
                        <img src="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg" alt="" />
                        <div className="movie-information">
                            <h5 className='movie-name'>Avenger:Infinity War</h5>
                            <h5 className="movie-year">2019</h5>
                            <div className="buttons">
                                <button className="add-btn">ADD TO WATCH LIST</button>
                                <button className="add-btn">ADD TO WATCHED</button>
                            </div>
                        </div>
                    </div>
                    <div className="movie">
                        <img src="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg" alt="" />
                        <div className="movie-information">
                            <h5 className='movie-name'>Avenger:Infinity War</h5>
                            <h5 className="movie-year">2019</h5>
                            <div className="buttons">
                                <button className="add-btn">ADD TO WATCH LIST</button>
                                <button className="add-btn">ADD TO WATCHED</button>
                            </div>
                        </div>
                    </div>
                    <div className="movie">
                        <img src="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg" alt="" />
                        <div className="movie-information">
                            <h5 className='movie-name'>Avenger:Infinity War</h5>
                            <h5 className="movie-year">2019</h5>
                            <div className="buttons">
                                <button className="add-btn">ADD TO WATCH LIST</button>
                                <button className="add-btn">ADD TO WATCHED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addfilm
