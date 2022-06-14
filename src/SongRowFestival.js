import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from './DataLayer';

function SongRowFestival({ track }) {

    const [{user}, dispatch] = useDataLayerValue();


    return (
        <div className='SongRow'>
            <img className='SongRowAlbum' src={track.image} onClick={() => {dispatch({type: "SET_PLAYING_TRACK",playingTrack: track.uri})}} />
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

export default SongRowFestival;