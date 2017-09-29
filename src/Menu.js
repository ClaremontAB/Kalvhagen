import React, { Component } from 'react';
import logo from './img/topLogo.png';
import {Link} from 'react-router-dom';
import './css/menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      visible: false
    });
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({
      visible: true
    });
    document.addEventListener("click", this.hideMenu);
  }

  hideMenu() {
    this.setState({
      visible: false
    });
    document.removeEventListener("click", this.hideMenu);
  }

  render() {
      return (
        <button onClick={this.showMenu}>
          <img className="menuIcon" src={logo} alt="menu"/>
          <div className={"menu " + (this.state.visible ? "visible " : "")}>
            <Link to="/pages" key="2" className="menuItem" >Pages</Link>
            <Link to="/pages" key="3" className="menuItem" >Pages</Link>
            <Link to="/pages" key="4" className="menuItem" >Pages</Link>

          </div>
        </button>
      );
  }
}
export default Menu;
