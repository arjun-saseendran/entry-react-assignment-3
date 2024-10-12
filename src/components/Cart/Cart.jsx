import axios from "axios";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";


function Cart() {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const cartNo = useSelector(state => state.cart.cartNo)
    
  return (
    <Container className="m-5 vh-100">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ background: "#8EACCD", color: "#2D4263" }}>No</th>
            <th style={{ background: "#8EACCD", color: "#2D4263" }}>Title</th>
            <th style={{ background: "#8EACCD", color: "#2D4263" }}>Image</th>
            <th style={{ background: "#8EACCD", color: "#2D4263" }}>
              Description
            </th>
            <th style={{ background: "#8EACCD", color: "#2D4263" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <tr>
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>{cartNo}</td>
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>
                {product.title}
              </td>
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>
                {" "}
                <img src={product.image} height='50px'/>
              </td>
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>
                {product.description}
              </td>
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
