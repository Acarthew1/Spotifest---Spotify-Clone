import React from 'react';
import Body from './Body';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import HeaderSearch from './HeaderSearch';
import Player from './Player';
import Sidebar from './Sidebar';

function SearchResults( {spotify} ) {

    const [{ SearchResults }, dispatch] = useDataLayerValue();
    return (
        <div className='Player'>
            <div className='PlayerBody'>
                <Sidebar spotify={spotify} />
                <div className='Body'>
                    <HeaderSearch spotify={spotify} />
                    <div className='BodyInfo'>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SearchResults;