import React, { useEffect } from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import HeaderSearch from './HeaderSearch';
import Sidebar from './Sidebar';
import './SearchResults.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRowArtist from './SongRowArtist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchResults( {spotify} ) {

    const [{ searchResults, artistTopTracks, festivalPlaylist }, dispatch] = useDataLayerValue();
    function handleClick() {
        const toAdd = artistTopTracks.tracks.map((track) => {
            return({
                image: track.album.images[0].url,
                uri: track.uri,
                name: track.name,
                album: track.album,
                artists: track.artists

            })
        })
        
        if(!festivalPlaylist){
            dispatch({
                type: "SET_FESTIVAL_PLAYLIST",
                festivalPlaylist: toAdd
            })

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
    return (
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
                                <PlayCircleFilledIcon className='BodyShuffle'/>
                                <button onClick={ () => {handleClick()}}>Add To Festival Playlist!</button>
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
                                <MoreHorizIcon className='BodyIconsSpacing' />
                        </div>
                        {artistTopTracks?.tracks.map((item) => (
                        <SongRowArtist track={item} />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SearchResults;