import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import Menu from './Menu.js';

import logo from './img/topLogo.png';
import './css/header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <Menu />
          <img src={logo} alt="LOGOGOGO" className="topLogo"></img>
          <Link to="/" className="headerItem">Home</Link>
          <Link to="/posts" key="1" className="headerItem" >Posts</Link>
          <Link to="/pages" key="2" className="headerItem" >Pages</Link>
          <Link to="/pages" key="3" className="headerItem" >Meny2</Link>
          <Link to="/pages" key="4" className="headerItem" >Meny3</Link>
          <Link to="/pages" key="5" className="headerItem" >Meny4</Link>
          <Link to="/pages" key="6" className="headerItem" >Menyny</Link>
      </div>
    );
  }
}

export default Header;
