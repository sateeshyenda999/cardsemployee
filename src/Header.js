import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container className="nav-header-container main-header">
        <Navbar.Brand href="#home">
          <img
            src="/assets/brand.jpg"
            className="d-inline-block align-top nav-brand-img"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="My Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <InputGroup>
          <DropdownButton
            variant="outline-secondary"
            title="Select"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
          <Form.Control aria-label="Text input with dropdown button" />
          <InputGroup.Text id="basic-addon2">
            <FontAwesomeIcon icon="fa-magnifying-glass" />
          </InputGroup.Text>
        </InputGroup>
        <Button variant="dark">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </Button>
        <Button variant="dark">
          <FontAwesomeIcon icon="fa-bell" />
        </Button>
        <Button variant="dark">
          <FontAwesomeIcon icon="fa-heart" />
        </Button>
        <Button variant="light">
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </Button>
      </Container>
    </Navbar>
  );
};
export default Header;
