import {Link} from 'react-router-dom';
import React, {Component} from 'react';

import logo from './img/topLogo.png';
import './css/header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img src={logo} alt="LOGOGOGO" className="topLogo"></img>
          <Link to="/" className="headerItem" >Home</Link>
          <Link to="/posts" key="1" className="headerItem" >Posts</Link>
          <Link to="/pages" key="2" className="headerItem" >Pages</Link>
      </div>
    );
  }
}

export default Header;
