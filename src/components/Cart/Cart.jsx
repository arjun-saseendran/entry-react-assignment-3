import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function Cart() {
    const [cartProducts, setProducts] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(response =>{
            const cart = [];
            cart.push(response.data)
            
            setProducts(cart)
        
        
        
        }).catch(error => console.log(error)
        );
    },[cartProducts])
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
              <td style={{ background: "#8EACCD", color: "#2D4263" }}>1</td>
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
