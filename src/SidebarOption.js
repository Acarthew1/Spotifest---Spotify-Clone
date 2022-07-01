import React from 'react';
import { useDataLayerValue } from './DataLayer';
import "./SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ Icon, title, uri, playlist }) {

    const [{token} , dispatch] = useDataLayerValue();
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
            
           
            {Icon ? <h4>{title}</h4> : <Link to="/playlist" className='SidebarOption'> <p onClick={handlePlaylistClick}>{title}</p> </Link>}
            
        </div>
    );
}

export default SidebarOption;