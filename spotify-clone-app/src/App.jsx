import { useEffect, useState } from "react";
import "./App.css"
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player"
import { DataLayer, useDataLayerValue } from "./DataLayer";
import { SearchWord } from "./Search/SearchMain";
const spotify = new SpotifyWebApi();



function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // const text = SearchWord();

    if (_token) {
      setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //dispatch 送る、送り出す、発送する、急送する

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXbKXQ4mDTEBXq").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      //追加(7/17)
      spotify.getMyRecentlyPlayedTracks().then((response) =>
        dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: response,
        })
      );

      //追加7/20日TODO:

      spotify.searchTracks("joy").then((response) =>
        dispatch({
          type: "SET_SEARCH_TRACK",
          search_track: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
    // console.log("I HAVE A TOKEN>>>", token)
  }, []);

  console.log("👨", user);
  console.log("👾", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
