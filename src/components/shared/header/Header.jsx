import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../../activeLink/ActiveLink";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Sign-out successful.");
      })
      .catch();
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="w-75" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5 menu">
            <ActiveLink className="me-4 text-light" to={"/home"}>
              Home
            </ActiveLink>
            <ActiveLink className="me-4 text-light" to={"/about"}>
              About Us
            </ActiveLink>
            <ActiveLink className="me-4 text-light" to={"/event"}>
              Events
            </ActiveLink>
            <ActiveLink className="me-4 text-light" to={"/menu"}>
              Menu
            </ActiveLink>
            <ActiveLink className="me-4 text-light" to={"/reservation"}>
              Reservation
            </ActiveLink>
            <ActiveLink className="me-4 text-light" to={"/contact"}>
              Contact Us
            </ActiveLink>
          </Nav>
          <Nav className="menu fs-5">
            {!user ? (
              <Nav.Link as={Link} className="text-success-emphasis" to="/login">
                Sign In
              </Nav.Link>
            ) : (
              <>
                <span className="mx-2 text-white-50">{user?.displayName}</span>
                <button onClick={handleLogout} className="border-0 bg-black text-danger">
                  Logout
                </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
