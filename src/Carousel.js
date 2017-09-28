import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from './img/image1.jpeg';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} autoPlay={true}>
                <div>
                    <img src={image1} alt="legend1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image1} alt="legend2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image1} alt="legend3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;
