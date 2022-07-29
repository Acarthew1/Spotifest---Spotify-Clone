import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';

function SongRow({ track }) {

    const [{user}, dispatch] = useDataLayerValue();

    function loadArtist() {
        track.artists.map((artist) => dispatch({
            type: "SET_SEARCH_RESULTS",
            searchResults: artist.uri
        }))
        
    }
    return (
        <div className='SongRow'>
            <img className='SongRowAlbum' src={track.album.images[0].url} onClick={() => {dispatch({type: "SET_PLAYING_TRACK",playingTrack: track.uri})}} />
            <div className='SongRowInfo'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
                </div> 
        </div>
    );
}

export default SongRow;