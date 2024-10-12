import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar expand="lg" style={{ background: "#041C32" }}>
      <Container>
        <Navbar.Brand className="text-white" href="/">
          ShopNow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-white" href="#home">
              Home
            </Link>
            <Link className="nav-link text-white" href="#link">
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
