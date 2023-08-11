import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./../../../assets/images/logo/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5 ">
            <Nav.Link className="me-4 text-light black-hover" href="#features">
              Home
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              About Us
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              Events
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              Menu
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              Reservation
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              Shop
            </Nav.Link>
            <Nav.Link className="me-4 text-light" href="#pricing">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
