import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Navigation() {

    return (
        <Navbar collapseOnSelect expand="sm" bg="light">
        <Container>
          <Navbar.Brand href="#">Nick's Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/cart">
                    <Nav.Link>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/user">
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
              </Nav>
              <Form className="d-flex">
                  <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
              </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;