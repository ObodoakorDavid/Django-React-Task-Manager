/** @format */

import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

import taskManagerLogo from "../images/TaskDuty Logo.png";
import profilePhoto from "../images/Profile photo.png";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Link to="/">
              <img src={taskManagerLogo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <img style={{ width: "50px" }} src={profilePhoto} alt="" />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/create">New Task</Link>
                  <Link to="/tasks">All Task</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbarr;
