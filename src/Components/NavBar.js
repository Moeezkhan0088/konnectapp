import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../Assests/Images/10 2.png";
import './NavBar.scss';

function NavBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#added-value">Added Value</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#foundation">Foundation</Nav.Link>
            <Nav.Link href="#join-team">Join Our Team</Nav.Link>
            <Nav.Link href="#get-quote">
              Get a Quote
              <hr className='underline'></hr>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
