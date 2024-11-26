import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { fetchProducts } from "../Redux/slice/productSlice";
import Header from "../Components/Header";
import { addToWishlist } from "../Redux/slice/wishlistSlice";
import { addToCart } from "../Redux/slice/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const { allproducts, loading, error } = useSelector(
    (state) => state.productReducer
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleWishlist = (product) => {
    console.log(wishlist);
    const existingProduct = wishlist.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("product already exist");
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCart = (product) => {
    console.log(cart);

    const existingProduct = cart?.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("Items Added");
      dispatch(addToCart(product));
    } else {
      alert("Item Added");
      dispatch(addToCart(product));
    }
  };
  return (
    <>
      <Header insideHome />
      <div style={{ marginTop: "50px" }} className="container-fluid">
        {loading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          <Row>
            {allproducts?.length > 0 ? (
              allproducts.map((product) => (
                <Col key={product?.id}>
                  <Card style={{ width: "18rem" }} className="m-2">
                    <Link to={`/view/${product?.id}`}>
                      {" "}
                      <Card.Img variant="top" src={product?.thumbnail} />
                    </Link>
                    <Card.Body>
                      <Card.Title className="text-danger fw-bolder">
                        {product?.title.slice(0, 10)}...
                      </Card.Title>
                      <Card.Text>
                        {product?.description.slice(0, 20)}...
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          className="btn btn-light"
                          onClick={() => handleWishlist(product)}
                        >
                          <i class="fa-solid fa-heart"></i>
                        </Button>
                        <Button
                          className="btn btn-light"
                          onClick={() => handleCart(product)}
                        >
                          <i class="fa-solid fa-cart-shopping"></i>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-danger">Nothing to Display</p>
            )}
          </Row>
        )}
      </div>
    </>
  );
}

export default Home;
