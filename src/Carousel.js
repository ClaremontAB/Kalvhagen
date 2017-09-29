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
          <Carousel showThumbs={false} autoPlay={true} onClickItem={this.click1}>
              <div>
                  <p className="textDiv"> En första text för att fira världens existens</p>
                  <img src={image1} alt="legend1" />
                  <p className="legend">Legend 1</p>
              </div>
              <div>
                  <p className="textDiv"> Klicka här för att komma framåt i livet</p>
                  <img src={image1} alt="legend2" />
                  <p className="legend">Legend 2</p>
              </div>
              <div>
                  <p className="textDiv"> Om du läser detta så är du viktig för någon!</p>
                  <img src={image1} alt="legend3"/>
                  <p className="legend">Legend 3</p>
              </div>
          </Carousel>
      );
  }
}
export default imgCarousel;
