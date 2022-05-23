import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import SelectSearch from 'react-select-search';


function HeaderSearch({spotify}) {

    const [Search, setSearch] = useState();
    const [Options, setOptions] = useState([]);
    const [{ user, searchResults }, dispatch] = useDataLayerValue();

    useEffect(() => {
        if(!Search) return setSearch([])
        spotify.searchTracks(Search).then(res => {
            const results = res.tracks.items.map( track => {

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: track.album.images[0]
                }

            })
            setOptions(results);
            console.log("Options Are: " + JSON.stringify(Options));
            dispatch({
                type: "SET_SEARCH_RESULTS",
                searchResults: results
                
              })
        })
        
    }, [Search])

    return (
        <div className='Header'>
            <div className='HeaderLeftSearch'>
                <SearchOutlinedIcon />
                <input
                placeholder='Search for Afrtists, Songs, or Playlists'
                type='text'
                value={Search}
                onChange={e => setSearch(e.target.value)} />
                
            </div>

            <div className='HeaderRight'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    );
}

export default HeaderSearch;