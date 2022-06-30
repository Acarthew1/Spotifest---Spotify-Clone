import React from 'react'
import { useDataLayerValue } from './DataLayer';
import './ArtistCard.css'


export default function ArtistCard( {artist} ) {

    const [{ artistList }, dispatch] = useDataLayerValue();
    console.log(artist)
  return (
    <div className='outer-card'>
        <div className='artist-image'>
            <img src={artist.image}></img>
        </div>
        <div className='artist-info'>
            <h2>{artist.name}</h2>
        </div>
    </div>
  )
}
