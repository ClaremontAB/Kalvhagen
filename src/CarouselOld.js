import React, {Component} from 'react';
import './css/carousel.css'

class Carousel extends Component {

  constructor() {
    super();
    this.state = {
      bgColor: 'blue',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let color = this.state.bgColor === 'blue' ? 'green' : 'blue';

   this.setState({
      bgColor: color
    });
  }

  render() {
    return (
      <button className="carousel" onClick={this.handleClick}
        style={{backgroundColor:this.state.bgColor}}>
      </button>
    );
  }
}

export default Carousel;
