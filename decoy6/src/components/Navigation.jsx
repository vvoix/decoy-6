import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/autre">Autre</Link> | <Link to="/maitre">Maitre</Link>
      </nav>
    </div>
  );
};

export default Navigation;

{
  /* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Wordlet</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Decoy 6" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Règles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Joueur maître</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Autre joueur</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>; 
<Outlet />*/
}
