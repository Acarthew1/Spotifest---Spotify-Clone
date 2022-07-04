export const initialState = {
    user: null,
    playing: false,
    item: null,
    token: null,
    playlists: null,
    discoverWeekly: null,
    selectedPlaylistUri: null,
    selectedPlaylist: null,
    selectedPlaylistTracks: null,
    playingTrack: [],
    searchResults: null,
    festivalPlaylist: null,
    selectedArtist: null,
    artistTopTracks: null,
    userPlaylistsForSearch: null,
    artistList: null,
    isExpanded: true,

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discoverWeekly: action.discoverWeekly
        }
        case 'SET_SELECTED_PLAYIST_URI':
        return {
            ...state,
            selectedPlaylistUri: action.selectedPlaylistUri
        }
        case 'SET_SELECTED_PLAYLIST':
        return {
            ...state,
            selectedPlaylist: action.selectedPlaylist
        }
        case 'SET_SELECTED_PLAYLIST_TRACKS':
        return {
            ...state,
            selectedPlaylistTracks: action.selectedPlaylistTracks
        }
        case 'SET_PLAYING_TRACK':
        return {
            ...state,
            playingTrack: action.playingTrack
        }
        case 'SET_SEARCH_RESULTS':
        return {
            ...state,
            searchResults: action.searchResults
        }
        case 'SET_FESTIVAL_PLAYLIST':
        return {
            ...state,
            festivalPlaylist: action.festivalPlaylist
        }
       case 'SET_SELECTED_ARTIST':
        return {
            ...state,
            selectedArtist: action.selectedArtist
        }
        case 'SET_ARTIST_TOP_TRACKS':
        return {
            ...state,
            artistTopTracks: action.artistTopTracks
        }
        case 'SET_ARTIST_LIST':
        return {
            ...state,
            artistList: action.artistList
        }
        case 'SET_IS_EXPANDED':
        return {
            ...state,
            isExpanded: action.isExpanded
        }
        default: 
            return state;
    }
    
}

export default reducer;