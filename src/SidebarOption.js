import React from 'react';
import { useDataLayerValue } from './DataLayer';
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ Icon, title, uri, playlist }) {

    const [{user, token} , dispatch] = useDataLayerValue();
   // spotify.setAccessToken(token);

    function handlePlaylistClick () {
        dispatch({
            type: "SET_SELECTED_PLAYLIST",
            selectedPlaylist: playlist
        })
        
    }

    return (
        <div className='SidebarOption'>
            
            {Icon && <Icon className='SidebarOptionIcon' />}
            
           
            {Icon ? <Link to="/" className='SidebarOption' style={{ textDecoration: 'none' }}> <h4>{title}</h4> </Link> : <Link to="/playlist" className='SidebarOption' style={{ textDecoration: 'none' }}> <p onClick={handlePlaylistClick}>{title}</p> </Link>}
            
        </div>
    );
}

export default SidebarOption;