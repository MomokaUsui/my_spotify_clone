export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: "BQD5QepXCxJ81ZzlAR52xh20W1__sodjkfC5DzZSggyPcIdMZt8bYcRhlFiMXGSHRjFtc6hmSGfG0M_70vc6rYvU5_PiiG9qvwt5zLCH1VBQgrQGI-m2OcoD3imId52b81wysnNDFAWCZY3RzdZR_FXPNV3CnfArJp5hSooQUh3Ke-gS1twv8XuBT-hie4SaeQ5w0eSkiqcmUf4ItTUP"
};

//ここ何やっているのか？？復習！reducer

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    //7/17日追記
    case "SET_TOP_TRACKS":
      return {
        ...state,
        top_tracks: action.top_tracks,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_SEARCH_TRACK":
      return {
        ...state,
        search_track: action.search_track,
      };
    case "AUDIO_ANALYSIS":
      return {
        ...state,
        analysis_track: action.analysis_track,
      };
    case "AUDIO_FEATURES":
      return {
        ...state,
        features_track: action.features_track,
      };
    case "TRACKS_FEATURES":
      return {
        ...state,
        tracks_features: action.tracks_features,
      }; 
      
                

    default:
      return state;
  }
};

export default reducer;
