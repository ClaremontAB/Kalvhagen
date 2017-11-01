import React, { Component } from 'react';
import image from '../../resources/14774102-4eZZM.jpg';
import {NavItem, Nav, Navbar, Image} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

class Header extends Component {

  componentDidMount(){
    window.addEventListener("scroll", this.myFunction);
    }

    myFunction() {
        if (document.documentElement.scrollTop > 50) {
            console.log("1");
          }else{
            console.log("2");
          }
      }

  render() {
    let shrink = {
      height: "10px",
      backgroundColor: "blue"
    };
    return (
      <Navbar inverse collapseOnSelect style={shrink}>
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
