import React, { useEffect, useState } from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import HeaderSearch from './HeaderSearch';
import Sidebar from './Sidebar';
import './SearchResults.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRowArtist from './SongRowArtist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchResults( {spotify} ) {

    const [{ searchResults, artistTopTracks, festivalPlaylist, artistList }, dispatch] = useDataLayerValue();
    const [disabled, setDisabled] = useState(false);

    function handleAddClick() {
        if(!artistList) {
            dispatch({
                type: 'SET_ARTIST_LIST',
                artistList: [searchResults]
            })
        }else{
            dispatch({
                type: 'SET_ARTIST_LIST',
                artistList: [...artistList, searchResults]
            })
        }
        setDisabled(true);
        var toAdd = artistTopTracks.tracks.map((track) => {
            return({
                image: track.album.images[0].url,
                uri: track.uri,
                name: track.name,
                album: track.album,
                artists: track.artists

            })
        })

        toAdd = toAdd.slice(0,5);
        
        if(!festivalPlaylist){
            dispatch({
                type: "SET_FESTIVAL_PLAYLIST",
                festivalPlaylist: toAdd
            })
            toast.success('🎵 Artist Added To Playlist 🎵', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else{
            dispatch({
                type: "SET_FESTIVAL_PLAYLIST",
                festivalPlaylist: [...festivalPlaylist, ...toAdd]
            })
            console.log(festivalPlaylist)
            toast.success('🎵 Artist Added To Playlist 🎵', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

        
    
        
                
    }

    useEffect(() => {
        if(searchResults){
            setDisabled(false);
            const splitArray = searchResults?.uri.split(":")
            const id = splitArray[2]

            spotify.getArtistTopTracks(id, "US").then(res => {
                dispatch({
                    type: "SET_ARTIST_TOP_TRACKS",
                    artistTopTracks: res
                })
            })
        }
        
    }, [searchResults])

    function handlePlayClick() {
        console.log(searchResults)
        dispatch({
            type: "SET_PLAYING_TRACK",
            playingTrack: searchResults.uri
        })
        
        
    }
    return (
        searchResults?
        <div className='Player'>
            <div className='PlayerBody'>
                <Sidebar spotify={spotify} />
                <div className='Body'>
                    <HeaderSearch spotify={spotify} />
                    
                    <div className='BodyInfo'>
                        <div className='artist-banner'>
                            <img src={searchResults?.image}></img>
                            <div className='artist-banner-text'>
                                <h1 className='artistName'>{searchResults?.name}</h1>
                                <h2 className='monthlyListeners'>Monthly Listeners: {searchResults?.followers}</h2>
                            </div>
                        </div>
                        

                    </div>
                    <div className='BodySongs'>
                        <div className='BodyIcons'>
                                <PlayCircleFilledIcon className='BodyShuffle' onClick={() => handlePlayClick()}/>
                                <button className='addButton' disabled={disabled} onClick={ () => {handleAddClick()}}>Add to festival playlist</button>
                                <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                />
                        </div>
                        {artistTopTracks?.tracks.map((item) => (
                        <SongRowArtist track={item} />
                        ))}
                    </div>

                </div>

            </div>

        </div>

        :
        <div className='Player'>
            <div className='PlayerBody'>
                <Sidebar spotify={spotify} />
                <div className='Body'>
                    <HeaderSearch spotify={spotify} />
                </div>
            </div>
        </div>    
        
    );
}

export default SearchResults;