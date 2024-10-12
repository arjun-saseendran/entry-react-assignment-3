import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();

  const [viewProduct, setViewProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setViewProduct(response.data))
      .catch((error) => console.log(error));
  }, []);
  

  return (
    <Container>
      <Row className="flex justify-content-center align-items-center m-5 vh-100">
        <Col sm={12} className="w-50" key={viewProduct.id}>
          <Card style={{ background: "#8EACCD" }} className="p-5">
            <Card.Img
              variant="top"
              src={viewProduct.image}
              style={{ objectFit: "contain", height: "300px" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#2D4263" }}>
                {viewProduct.title}
              </Card.Title>
              <Card.Text style={{ color: "#2D4263" }}>
                {viewProduct.description}
              </Card.Text>
              <Card.Text style={{ color: "#2D4263" }}>
                {viewProduct.price}
              </Card.Text>
              <Button variant="dark" style={{ background: "#2D4263" }}>
                Buy now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewProduct;
