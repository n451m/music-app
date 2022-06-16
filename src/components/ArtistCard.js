
import React, { useState } from 'react';
import Ratings from './LikeBtn';




const ArtistCard = () => {
  const [ artist, setArtist ] = useState('Stormzy');
  const [image, setImage] = useState('https://www.musicweek.com/cimages/6c69257f7a1aaaa5a1d7876bb46300e6.jpg')

  return (
    <div className="artist">
      <h2 className="name">{artist}</h2>
      <img className="radius" src={image} width="200px"/>
    <span className="genre"> Genre:
       <h3 className='card-Align'> Grime/UK rap</h3>
    </span>

    <span className='bio'> Bio:
        <h3>Stormzy is an artist who first gained notoriety for his 'wickedSkengman' freestyles over grime beats.</h3>
      </span>
     
      <Ratings />
    </div>
     

  );
  
}


export default ArtistCard;




