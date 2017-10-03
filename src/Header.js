import React, {Component} from 'react';
import Menu from './Menu.js';

import logo from './img/topLogo.png';
import './css/header.css'

class Header extends Component {

  render() {
    return (
      <div className="header">
          <Menu />
      </div>
    );
  }
}

export default Header;
