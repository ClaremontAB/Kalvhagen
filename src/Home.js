import React, {Component} from 'react';
import Carousel  from './Carousel.js';
import './css/page.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <div className="page">
                  <h1>Home</h1>
                  <p>Initial template project to show how we can fetch data, for now pages and posts from wordpress in a react project.
                      The data will be whatever you add in your wordpress installation. Try it out! :)
                      Testing Jenkins</p>
                </div>
            </div>
        );
    }
}

export default Home;
