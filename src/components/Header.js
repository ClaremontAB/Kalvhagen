import React, { Component } from 'react';
import image from '../../resources/14774102-4eZZM.jpg';
import {NavItem, Nav, Navbar, Image} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
      threshold: 50
    }
  }
  componentDidMount(){
    window.addEventListener("scroll", this.shrinkOnScroll);
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", this.shrinkOnScroll);
  }

  componentDidCatch (err, info) {
    console.log(info);
  }

  shrinkOnScroll = () => {
    if (document.documentElement.scrollTop > this.state.threshold) {
        this.setState({
          shrink: true,
          threshold: 0
        })
      } else {
        this.setState({
          shrink: false,
          threshold: 50
        })
      }
  }
  getBrandLogo = () => {
    return (
      this.state.shrink ? <Navbar.Brand><div className="brand-text">KALVHAGEN</div></Navbar.Brand> : <Image src={image} alt="Kalvhagen" className="header-logo"/>
    )
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className={this.state.shrink ? "navbar-fixed-top shrink" : "navbar-fixed-top"}>
          <Navbar.Header>
            <LinkContainer to="/">
              {this.getBrandLogo()}
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/home">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/categor">
                <NavItem eventKey={2}>Away</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
