import React from "react";
import styles from './spotify.css'

export default function TrackArtistResults({artist, chooseArtist}) {
    
    function handleLoadArtist () {
        chooseArtist(artist);
    }

    return(
        <div className='d-flex m-2 align-items-left justify-content-left' style={{ cursor: 'pointer', backgroundColor: '#181818'}} onClick={handleLoadArtist}>
        <img src={artist.image} className={styles.grow} style={{height: '64px', width: '64px'}} draggable={false}></img> 
        <div className='ml-3'>
            <div style={{ color: '#FFFFFF'}}>{artist.name}</div>
            <div className='text-muted'style={{ color: '#FFFFFF'}}>Followers: {artist.followers}</div>       
        </div>
    </div>
    )
}