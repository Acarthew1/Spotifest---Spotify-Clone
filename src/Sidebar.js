import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FestivalIcon from '@mui/icons-material/Festival';
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';

function Sidebar({ spotify }) {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='Sidebar'>
            <img className='SidebarLogo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' />
            <Link to='/' style={{ textDecoration: 'none' }}><SidebarOption title="Home" Icon={HomeIcon} /></Link>
            <Link to='/search' style={{ textDecoration: 'none' }}><SidebarOption title="Search" Icon={SearchOutlinedIcon}/> </Link>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <SidebarOption title="Create Festival Playlist" Icon={FestivalIcon}/>

            <br />
            <strong className='SidebarTitle'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} uri={playlist.uri} playlist={playlist} />
            ))}

        </div>
    );
}

export default Sidebar;