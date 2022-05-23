import React, { useEffect, useState } from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import SelectSearch from 'react-select-search';


function Header({spotify}) {

    const [{ user, searchResults }, dispatch] = useDataLayerValue();

    return (
        <div className='Header'>
            <div className='HeaderLeft'>
                
            </div>

            <div className='HeaderRight'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    );
}

export default Header;