import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../resources/14774102-4eZZM.jpg';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <img id="header-logo" src={image} />
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-list"><Link to="/">Home</Link></li>
            <li className="nav-list"><Link to="/category">Category</Link></li>
            <li className="nav-list"><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
