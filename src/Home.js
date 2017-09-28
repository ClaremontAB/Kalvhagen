import React, {Component} from 'react';
import DemoCarousel  from './Carousel.js';

class Home extends Component {
    render() {
        return (
            <div>
                <DemoCarousel/>
                <h1>Home</h1>
                <p>Initial template project to show how we can fetch data, for now pages and posts from wordpress in a react project.
                    The data will be whatever you add in your wordpress installation. Try it out! :)
                    Testing Jenkins</p>
            </div>
        );
    }
}

export default Home;
