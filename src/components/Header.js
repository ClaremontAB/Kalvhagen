import React, { Component } from 'react';
import image from '../../resources/14774102-4eZZM.jpg';
import {NavItem, Nav, Navbar, Image} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: false
    }
  }
  componentDidMount(){
    window.addEventListener("scroll", this.myFunction);
    }

    myFunction = () => {
        if (document.documentElement.scrollTop > 50) {
            this.setState({
              shrink: true
            })
          }else{
            this.setState({
              shrink: false
            })
          }
      }

  render() {
    return (
      <Navbar inverse collapseOnSelect className={this.state.shrink ? "navbar-fixed-top shrink" : "navbar-fixed-top"}>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={image} className="header-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/home">
                <NavItem eventKey={2}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/category">
                <NavItem eventKey={3}>Book Inv</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;
