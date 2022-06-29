import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discoverWeekly }, dispatch] = useDataLayerValue();

    function handlePlayPlaylist() {
        dispatch({
            type: "SET_PLAYING_TRACK",
            playingTrack: discoverWeekly.uri
        })
    }

    return (
        <div className='Body'>
            <Header spotify={spotify} />

            <div className='BodyInfo'>
                <img src={discoverWeekly?.images[0].url} />
                <div className='BodyInfoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{discoverWeekly?.name}</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>

            <div className='BodySongs'>
                <div className='BodyIcons'>
                    <PlayCircleFilledIcon className='BodyShuffle' onClick={() => handlePlayPlaylist()} />
                    <FavoriteIcon fontSize='large' className='BodyFave' />
                </div>
                {discoverWeekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;