import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import kick1 from "../../resources/kick1.jpg";
import kick2 from "../../resources/kick2.jpg";
import kick3 from "../../resources/kick3.jpg";

class MyCarousel extends Component {

  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={"100%"} height={"auto"} alt="900x500" src={kick1}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Text här som beskriver slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"auto"} alt="900x500" src={kick2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>För jag tycker att riktigt text ser bättre ut än lorem ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={"100%"} height={"auto"} alt="900x500" src={kick3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>En tanke är att man slänger in en navigation on click här</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

}

export default MyCarousel;
