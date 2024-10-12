import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";


function Header() {
   const cartCount =  useSelector(state => state.cart.cartCount)
  return (
    <Navbar expand="lg" style={{ background: "#041C32" }}>
      <Container>
        <Navbar.Brand className="text-white">
          <Link className="nav-link" to={"/"}>
            ShopNow
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link text-white">
              Home
            </Link>
            <Link to={"/cart"} className="nav-link text-white">
              Cart
              <Badge
                bg="dark"
                style={{ background: "#2D4263", color: "white" }}
              >
                {cartCount}
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
