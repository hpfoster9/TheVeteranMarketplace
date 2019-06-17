import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class NavbarComponent extends Component {
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Operation Tango Yankee</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="">
            About Us
          </NavItem>
          <NavItem eventKey={2} href="#">
            Business
          </NavItem>
          <NavItem eventKey={3} href="/careers">
            Careers
          </NavItem>
          <NavItem eventKey={4} href="/contact">
            Contact Us
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarComponent;