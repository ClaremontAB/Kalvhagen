import React, { Component } from 'react';
import image from '../../../resources/14774102-4eZZM.jpg';
import {NavItem, Nav, Navbar, Image} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
      threshold: 50
    };
  }
  componentDidMount(){
    window.addEventListener("scroll", this.shrinkOnScroll);
  }

  componentWillUnmount () {
    window.removeEventListener("scroll", this.shrinkOnScroll);
  }

  shrinkOnScroll = () => {
    const scrollTop = document.documentElement.scrollTop || window.scrollY;
    if (scrollTop > this.state.threshold) {
        this.setState({
          shrink: true,
          threshold: 0
        });
      } else {
        this.setState({
          shrink: false,
          threshold: 50
        });
      }
  }
  getBrandLogo = () => {
    let brandElement;
    if (this.state.shrink) {
      brandElement = <Navbar.Brand><LinkContainer to="/"><div className="brand-text">KALVHAGEN</div></LinkContainer></Navbar.Brand>;
    } else {
      brandElement = <Image src={image} alt="Kalvhagen" className="header-logo"/>;
    }
    return brandElement;
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid className={this.state.shrink ? "navbar-fixed-top shrink" : "navbar-fixed-top"}>
          <Navbar.Header>
            <LinkContainer to="/">
              {this.getBrandLogo()}
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/training">
                <NavItem eventKey={1}>Träning</NavItem>
              </LinkContainer>
              <LinkContainer to="/schedule">
                <NavItem eventKey={2}>Schema</NavItem>
              </LinkContainer>
              <LinkContainer to="/trainers">
                <NavItem eventKey={3}>Tränare</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={4}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/componentsPage">
                <NavItem eventKey={5}>Komponenter</NavItem>
              </LinkContainer>
              <LinkContainer to="/booking">
                <NavItem eventKey={6}>Bokning</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
