import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
