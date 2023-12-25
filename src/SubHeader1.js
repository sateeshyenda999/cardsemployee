import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
 

const SubHeader1 = () => {return (
    <Navbar
    className="bg-body-tertiary"
  >
    <Container className="nav-header-container sub-header">
    <Navbar.Text >
    <FontAwesomeIcon icon="fa-magnifying-glass" />   Related Searches
          </Navbar.Text>
          <Navbar.Text >
      Employee
          </Navbar.Text>
          <Navbar.Text >
      Employee Details
          </Navbar.Text>
          <Navbar.Text >
      Employee Shift Timings
          </Navbar.Text>
          <Navbar.Text>
      Adventureworks2017.humanresources.employee
          </Navbar.Text>
    </Container>
  </Navbar>
)}
export default SubHeader1;