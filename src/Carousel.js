import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/carousel.css';

import image1 from './img/image1.jpeg';

class imgCarousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ["hej"]
    };
  }

  click1() {
    alert( "image clicked");

  }

  render() {
      return (
          <Carousel showThumbs={false} autoPlay={true} onClickItem={this.click1} showStatus={false}>
              <div>
                  <img src={image1} alt="legend1" />
              </div>
              <div>
                  <img src={image1} alt="legend2" />
              </div>
              <div>
                  <img src={image1} alt="legend3"/>
              </div>
          </Carousel>
      );
  }
}
export default imgCarousel;
