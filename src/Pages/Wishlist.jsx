import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist } = useSelector((state) => state.wishlistReducer);
console.log(wishlist);

  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }} className="container-fluid"> 
        <Row>

          {wishlist.length > 0
            ? wishlist.map(product => (
                <Col>
                  <Card style={{ width: "18rem" }} className="m-2">
                    <Link to={`/view/${product?.id}`}>
                      {" "}  
                      <Card.Img variant="top" src={product?.thumbnail} />
                    </Link>
                    <Card.Body>
                      <Card.Title className="text-danger fw-bolder">
                        ${product?.title.slice(0, 10)}...
                      </Card.Title>
                      <Card.Text>
                        {product?.description.slice(0, 20)}...
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button className="btn btn-light">
                          <i class="fa-solid fa-heart"></i>
                        </Button>
                        <Button className="btn btn-light">
                          <i class="fa-solid fa-cart-shopping"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            ))
            : 
            <div className="text-center">
              <img src="https://img.freepik.com/free-vector/couple-riding-supermarket-shopping-cart_33099-179.jpg?t=st=1732168640~exp=1732172240~hmac=4fc35cfa039933c15f3ef69bf70bc71b16ddcf65f2c61008f3d9aee1e1b50758&w=740" alt=""  style={{width:"400px"}}/>
              <h2>Your Cart is Empty</h2>
          
            </div>
            }
        </Row>
      </div>
    </>
  );    
}

export default Wishlist;
