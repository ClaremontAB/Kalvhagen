import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/carousel.css';

import image1 from './img/image1.jpeg';

class imgCarousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  click1(key) {
    alert("image clicked");
  }

  render() {
      return (
          <Carousel showThumbs={false} autoPlay={false} onClickItem={this.click1} showStatus={false}>
              <div>
                  <img src={image1} alt="legend1" />
                  <p className="legend">Legend image 1</p>
              </div>
              <div>
                  <img src={image1} alt="legend2" />
                  <p className="legend">Legend image 2</p>
              </div>
              <div>
                  <img src={image1} alt="legend3"/>
                  <p className="legend">Legend image 3</p>
              </div>
          </Carousel>
      );
  }
}
export default imgCarousel;
