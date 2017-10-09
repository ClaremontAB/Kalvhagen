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
  }

  getMenuItems(cssClass = "headerItem") {
    return (
      <div>
        <Link to="/" className={cssClass}>Home</Link>
        <Link to="/posts" key="1" className={cssClass} >Posts</Link>
        <Link to="/pages" key="2" className={cssClass} >Pages</Link>
        <Link to="/page1" key="3" className={cssClass} >Page 1</Link>

      </div>
    )
  }

  showMenu = () => {
    this.setState({
      visible: true
    });
    document.addEventListener("click", this.hideMenu);
  }

  hideMenu = () => {
    this.setState({
      visible: false
    });
    document.removeEventListener("click", this.hideMenu);
  }

  render() {
      return (
        <div>
          <div className="headerMenu">
            {this.getMenuItems()}
          </div>
          <img className="menuButton" src={logo} alt="menu" onClick={this.showMenu}/>
          <div className={"menu " + (this.state.visible ? "visible " : "")}>
            {this.getMenuItems("menuItem")}
          </div>
      </div>
      );
  }
}
export default Menu;
