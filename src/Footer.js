import React, { useEffect, useState } from 'react';
import "./Footer.css";
import SpotifyPlayer from 'react-spotify-web-playback';
import { useDataLayerValue } from './DataLayer';

function Footer() {

    const [{ token, playingTrack }] = useDataLayerValue();
    const [play, setPlay] = useState();

    useEffect(() => {
        setPlay(true);
    }, [playingTrack]);


    return (
        <>
        <div className='Footer'>
            <SpotifyPlayer styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
            }} token={token} uris={playingTrack ? [playingTrack] : []} autoPlay={true} play={play} callback={(state) => {
                setPlay(state.isPlaying);
              }} showSaveIcon={true}/>
        </div>
        
        </>
    );
}

export default Footer;