import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';


function Header() {

    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className='Header'>
            <div className='HeaderLeft'>
                <SearchOutlinedIcon />
                <input
                placeholder='Search for Afrtists, Songs, or Playlists'
                type='text' />
                
            </div>

            <div className='HeaderRight'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    );
}

export default Header;