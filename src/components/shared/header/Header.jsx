import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="w-75" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5 menu">
            <Nav.Link as={Link} className="me-4 text-light" to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="me-4 text-light" to={"/about"}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} className="me-4 text-light" to={"/event"}>
              Events
            </Nav.Link>
            <Nav.Link as={Link} className="me-4 text-light" to={"/menu"}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} className="me-4 text-light" to={"/reservation"}>
              Reservation
            </Nav.Link>
            <Nav.Link as={Link} className="me-4 text-light" to={"/contact"}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
