import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Watchlist from './Components/Content/Watchlist/Watchlist';
import Watched from './Components/Content/Watched/Watched';
import Addfilm from './Components/Content/Add/Addfilm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='page-container'>
            <Routes>
                <Route path="/" element={<Watchlist/>}/>
                <Route path="/watched" element={<Watched/>}/>
                <Route path="/add" element={<Addfilm/>}/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
