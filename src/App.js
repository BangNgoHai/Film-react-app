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
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
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
    setWatchList((watchList) => [...watchList, movie]);
  }

  function addtoWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='page-container'>
            <Routes>
                <Route path="/" element={<Watchlist watchList={watchList}/>}/>
                <Route path="/watched" element={<Watched watched={watched}/>}/>
                <Route path="/add" element={<Addfilm setMovie={setMovie} searchResults={searchResults} setSearched={setSearched} searched={searched} addtoWatchlist={addtoWatchlist} addtoWatched={addtoWatched} isClicked={isClicked} setIsClicked={setIsClicked}/>}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

