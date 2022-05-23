import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import Playlist from './Playlist';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './Footer';
import SearchResults from './SearchResults';

const spotify = new SpotifyWebApi();

function App() {
  
  const [Token, setToken] = useState(null);
  const [{user, token, selectedPlaylist}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ("");
    const token = hash.access_token;
    
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token: token,
      })
            
      spotify.setAccessToken(token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcSca6rh2W2Ui').then((discoverWeekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: discoverWeekly
        })
      })

    }

  }, []);


  return (
    token ? 
    <Router>
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Player spotify={spotify}/>}> </Route>
        <Route path='/playlist' element={<Playlist spotify={spotify}/>}> </Route>
        <Route path='/search' element={<SearchResults spotify={spotify}/>}> </Route>      
      </Routes>   

    </div>
    <Footer spotify={spotify} />
    </Router>
    : 
    <Login />
   
  );
}

export default App;
