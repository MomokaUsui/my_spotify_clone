export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQD5QepXCxJ81ZzlAR52xh20W1__sodjkfC5DzZSggyPcIdMZt8bYcRhlFiMXGSHRjFtc6hmSGfG0M_70vc6rYvU5_PiiG9qvwt5zLCH1VBQgrQGI-m2OcoD3imId52b81wysnNDFAWCZY3RzdZR_FXPNV3CnfArJp5hSooQUh3Ke-gS1twv8XuBT-hie4SaeQ5w0eSkiqcmUf4ItTUP"
}

//ここ何やっているのか？？復習！reducer

const reducer = (state, action) => {
    console.log(action);
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

        default:    
            return state;
    }

}

export default reducer;