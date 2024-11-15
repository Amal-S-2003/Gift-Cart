import React from "react";
import { Badge, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ background: "#afcbd5" }}>
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "White",
                fontSize: "30px",
              }}
            >
              <i class="fa-solid fa-truck-fast fa-bounce"></i>E-cart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form.Control
            type="text"
            placeholder="Search"
            className="ms-5 w-25"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="btn btn-outline-light">
                <Link
                  to={"/cart"}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  <i class="fa-solid fa-cart-shopping text-danger"></i>
                  <b className="mx-1">Cart</b>
                  <Badge bg="success rounded ms-s">0</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link className="btn btn-outline-light">
                <Link
                  to={"/wishlist"}
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  <i class="fa-solid fa-heart text-danger"></i>
                  <b className="mx-1">Whishlist</b>
                  <Badge bg="success rounded ms-s">0</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
