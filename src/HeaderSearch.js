import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import SelectSearch from 'react-select-search';
import TrackArtistResults from './TrackArtistResults';


function HeaderSearch({spotify}) {

    const [Search, setSearch] = useState();
    const [Options, setOptions] = useState([]);
    const [{ user, searchResults }, dispatch] = useDataLayerValue();


    useEffect(() => {
        if(!Search) return setSearch([])
        spotify.searchArtists(Search).then(res => {
            const results = res.artists.items.map( artist => {

                return {
                    name: artist.name,
                    image: artist.images[0].url,
                    uri: artist.uri,
                    followers: artist.followers.total.toLocaleString('en', {useGrouping:true})
                }

            })
            dispatch({
                type: "SET_SEARCH_RESULTS",
                searchResults: results[0]
                
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