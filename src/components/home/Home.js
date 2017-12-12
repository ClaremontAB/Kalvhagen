import React, { Component } from 'react';
//import VideoWidget from '../common/VideoWidget';
import PortraitGrid from '../common/PortraitGrid';

import kickboxning from '../../../resources/kickboxning.jpg';
import pt from '../../../resources/pt.jpg';
import koncept from '../../../resources/koncept.jpg';

const training = [{
    name: 'Kickboxning',
    imgSrc: kickboxning
}, {
  name: 'Personlig träning',
  imgSrc: pt
}, {
  name: 'Konceptträning',
  imgSrc: koncept
}, {
  name: 'Kickboxning',
  imgSrc: kickboxning
}, {
  name: 'Personlig träning',
  imgSrc: pt
}, {
  name: 'Konceptträning',
  imgSrc: koncept
}];


class Home extends Component {

  render () {
    return (
      <div className="">
        <div className="home-img-container">
          <div className="home-page-image" />
          <h3 className="image-text"> Din träningspartner i etern! </h3>
        </div>
        <PortraitGrid portraits={training} />
      </div>
    );
  }
}

export default Home;
