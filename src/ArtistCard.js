import React from 'react'
import './ArtistCard.css'


export default function ArtistCard( {artist} ) {

  return (
    <div className='outer-card'>
        <div className='artist-image'>
            <img src={artist.image} alt='artist'></img>       
        </div>
        
        <div className='artist-info'>
            <h2>{artist.name}</h2>
        </div>
    </div>
  )
}
