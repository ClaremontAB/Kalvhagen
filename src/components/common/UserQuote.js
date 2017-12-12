import React from 'react';
import {Thumbnail} from 'react-bootstrap';

import bild from '../../../resources/trainer-marcus.jpg'

const UserQuote = () => {
  //image
  //citat-text
  //sammanhang på CitatText
  return (
    <Thumbnail src={bild} className="user-quote-container">
      <h3> Peter Kräm </h3>
      <p> Kickboxning </p>
      <p> "Det bästa som hänt sen skivat bröd!" </p>
    </Thumbnail>
  )
};

export default UserQuote;
