import React, { useEffect, useState } from "react";
import { Badge, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../Redux/Slice/ProductSlice";


function Header({ insideHome }) {
  const dispatch=useDispatch();
  const [wishlistCount, setWishlistCount] = useState(0);
  const { wishlist } = useSelector((state) => state.wishlistReducer);

  useEffect(() => {
    setWishlistCount(wishlist.length)
    
  }, [wishlist]);
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
              <i class="fa-solid fa-truck-fast fa-bounce"></i>GiftCart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {insideHome && (
            <Form.Control
              type="text"
              placeholder="Search"
              className="ms-5 w-25"
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
            />
          )}
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
                  <Badge bg="success rounded ms-s">{wishlistCount}</Badge>
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
