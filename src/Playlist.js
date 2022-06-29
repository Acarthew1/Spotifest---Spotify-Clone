import React, { useEffect, useState } from 'react';
import './Body.css';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDataLayerValue } from './DataLayer';
import  Header from './Header';
import Sidebar from './Sidebar';


function Playlist( { spotify } ) {
    const [{ selectedPlaylist, selectedPlaylistTracks, playlistToPlay }, dispatch] = useDataLayerValue();

    var playlistUriList = [];
    

    useEffect(() => {
        spotify.getPlaylist(selectedPlaylist.id).then((tracks) => {
            dispatch({
                type: "SET_SELECTED_PLAYLIST_TRACKS",
                selectedPlaylistTracks: tracks
              })
          })

    }, [selectedPlaylist]);

    function handlePlayPlaylist(){
        dispatch({
            type: "SET_PLAYING_TRACK",
            playingTrack: selectedPlaylist.uri
          })
    }

    

    return (
        
        
        <div className='Player'>
            <div className='PlayerBody'>
                <Sidebar spotify ={spotify} />
                <div className='Body'>
            <Header spotify={spotify}></Header>
        <div className='BodyInfo'>
            <img src={selectedPlaylist?.images[0].url} />
            <div className='BodyInfoText'>
                <strong>PLAYLIST</strong>
                <h2>{selectedPlaylist?.name}</h2>
                <p>{selectedPlaylist?.description}</p>
            </div>
        </div>

        <div className='BodySongs'>
            <div className='BodyIcons'>
                <PlayCircleFilledIcon className='BodyShuffle' onClick={() => handlePlayPlaylist()}/>
                <FavoriteIcon fontSize='large' className='clicked'/>
            </div>
            {selectedPlaylistTracks?.tracks?.items?.map((item) => (
                <SongRow track={item.track}/>
            ))}
        </div>
        </div>

            </div>
            
            
        </div>
        
    
    );
}

export default Playlist;