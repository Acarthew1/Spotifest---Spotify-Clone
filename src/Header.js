import React from 'react';
import './Header.css';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import MenuIcon from '@mui/icons-material/Menu';


function Header({spotify}) {

    const [{ user, isExpanded}, dispatch] = useDataLayerValue();

    function handleExpandClick() {
        dispatch({
            type: 'SET_IS_EXPANDED',
            isExpanded: !isExpanded
        })
    }

    return (
        <div className='Header'>
            <div className='HeaderLeft'>
                <MenuIcon onClick={() => handleExpandClick()} className='menuIconMobile'></MenuIcon>
            </div>

            <div className='HeaderRight'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    );
}

export default Header;