import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SubHeader2 = () => {
  return (
    <Navbar bg="success-subtle" data-bs-theme="success-subtle" className="bg-body-tertiary">
      <Container className="nav-header-container sub-header">
        <div>
          <Button variant="light" className='me-2'>
            <FontAwesomeIcon icon="fa-filter" />
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon="fa-bookmark" />
          </Button>
        </div>

        <div>
          <Form.Check
            inline
            label="Exact expression (Pharse)"
            name="group1"
            type="radio"
            id={`inline-1`}
          />
          <Form.Check
            inline
            label="All words (AND)"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
          <Form.Check
            inline
            label="Atleast one word (OR)"
            type="radio"
            id={`inline-3`}
          />
        </div>
        <div>
          Sort By <FontAwesomeIcon icon="fa-solid fa-sort" />
        </div>
        <Form.Select aria-label="Select sort type" className="sort-by-select">
          <option>Select sort type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <ButtonGroup aria-label="toggleView">
        <Button variant="dark">
            <FontAwesomeIcon icon="fa-grip" />
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon="fa-list" />
          </Button>
    </ButtonGroup>
      </Container>
    </Navbar>
  );
};
export default SubHeader2;
