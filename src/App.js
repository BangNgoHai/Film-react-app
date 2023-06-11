import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Watchlist from './Components/Content/Watchlist/Watchlist';
import Watched from './Components/Content/Watched/Watched';
import Addfilm from './Components/Content/Add/Addfilm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [error,setError] = useState();
  const [movie,setMovie] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [searched,setSearched] = useState(false);
  const [watchList,setWatchList] = useState([]);
  const [watched,setWatched] = useState([]);
  const [add,setAdded] = useState([]);
  const [click,setClicked] = useState([]);

  console.log(watchList.length);

  useEffect(() => {
    console.log('movi', movie)
      if (movie) {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=ce5070cea2075e21c96680d7a37ce117&query=${movie}`;
        setError(null)
        axios.get(apiUrl)
          .then((response) => {
              setSearchResults(response.data.results);
            }
          )
          .catch(
            (error) => {
              setError(error);
              console.log(error);
            }
          )
      }
  },[movie])


  function addtoWatchlist(movie) {
    const movieIds = watchList.map((movie) => movie.id);  //In this code, first an array of existing movie IDs in the watchlist is created using map(). Then, the ID of the movie being added is checked against this array using includes(). If the movie ID is not already in the watchlist, it is added using setWatchList(). This should prevent duplicate movies from being added to the watchlist.
    if (!movieIds.includes(movie.id)) {
      setWatchList((watchList) => [...watchList, movie]);
      setAdded((add) => [...add, movie.id]);
    }
  }

  function addtoWatched(movie) {
    const movieIds = watched.map((movie) => movie.id);  //In this code, first an array of existing movie IDs in the watchlist is created using map(). Then, the ID of the movie being added is checked against this array using includes(). If the movie ID is not already in the watchlist, it is added using setWatchList(). This should prevent duplicate movies from being added to the watchlist.
    if (!movieIds.includes(movie.id)) {
      setWatched((watchList) => [...watchList, movie]);
      setClicked((click) => [...click, movie.id]);
    }
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='page-container'>
            <Routes>
                <Route path="/" element={<Watchlist watchList={watchList}/>}/>
                <Route path="/watched" element={<Watched watched={watched}/>}/>
                <Route path="/add" element={<Addfilm setMovie={setMovie} searchResults={searchResults} setSearched={setSearched} searched={searched} addtoWatchlist={addtoWatchlist} addtoWatched={addtoWatched} click={click} add={add} setClicked={setClicked} setAdded={setAdded}/>}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

