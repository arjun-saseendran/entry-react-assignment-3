import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="m-5">
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} xl={3} key={product.id}>
            <Card style={{ background: "#8EACCD", marginBottom: "24px" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    maxHeight: "20px",
                    overflow: "hidden",
                    color: "#2D4263",
                  }}
                >
                  {product.title}
                </Card.Title>
                <Card.Text
                  style={{
                    maxHeight: "78px",
                    overflow: "hidden",
                    color: "#2D4263",
                  }}
                >
                  {product.description}
                </Card.Text>
                <Card.Text
                  style={{
                    maxHeight: "78px",
                    overflow: "hidden",
                    color: "#2D4263",
                  }}
                >
                  ${product.price}
                </Card.Text>
                <Button
                  variant="dark"
                  className="m-1"
                  style={{ background: "#2D4263" }}
                >
                  Add to cart
                </Button>
                <Link to={`/view-product/${product.id}`}>
                  <Button
                    variant="dark"
                    className="m-1"
                    style={{ background: "#2D4263" }}
                  >
                    View product
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductCard;
