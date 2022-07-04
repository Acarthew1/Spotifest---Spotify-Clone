import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FestivalIcon from '@mui/icons-material/Festival';
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';
import logo from './spotifest.jpg';
import { style } from '@mui/system';


function Sidebar({ spotify }) {

    const [{ playlists, isExpanded }, dispatch] = useDataLayerValue();

    function toggleSidebarShow() {
        dispatch({
            type: 'SET_IS_EXPANDED',
            isExpanded: !isExpanded
        })
    }

    return (
        <div className={isExpanded ? 'Sidebar' : 'Sidebar.expanded'}>
            <img className='SidebarLogo' alt='logo' src={logo} />
            {/* <img className='SidebarLogo' alt='logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' /> */}
            <Link to='/' style={{ textDecoration: 'none' }}><SidebarOption title="Home" Icon={HomeIcon} onClick={() => toggleSidebarShow()} /></Link>
            <Link to='/search' style={{ textDecoration: 'none' }}><SidebarOption title="Search" Icon={SearchOutlinedIcon} onClick={() => toggleSidebarShow()}/> </Link>
            <Link to='/festival' style={{ textDecoration: 'none' }}><SidebarOption title="Create Festival Playlist" Icon={FestivalIcon} onClick={() => toggleSidebarShow()}/></Link>

            <br />
            <strong className='SidebarTitle'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} uri={playlist.uri} playlist={playlist} onClick={() => toggleSidebarShow()} />
            ))}

        </div>
    );
}

export default Sidebar;