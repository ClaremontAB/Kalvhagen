import React from 'react';
import {Carousel} from 'react-bootstrap';
import PropTypes from 'prop-types';

const MyCarousel = ({slides, width}) => {
  return (
    <Carousel>
      {slides.map((slide, index) =>
        (<Carousel.Item key={index}>
          <img width={width} alt={slide.label} src={slide.imgSrc}/>
          <Carousel.Caption>
            <h3>{slide.label}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>)
      )}
    </Carousel>
  );
};

MyCarousel.propTypes = {
  slides: PropTypes.array.isRequired
};

MyCarousel.defaultProps = {
  width: "100%"
}

export default MyCarousel;
