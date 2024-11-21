import { Button } from "react-bootstrap";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/slice/wishlistSlice";

function View() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"));
      setProduct(allProducts.find((item) => item.id == id));
    } else {
      setProduct("");
    }
  }, []);

  const handleWishlist=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exist")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <>
      <Header />
      <div className="container mt-5 row ms-5">
        <div className="col-lg-4">
          <img src={product?.thumbnail} style={{ width: "100%" }} alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <p>pid:{product?.id}</p>
          <h1>{product?.title} </h1>
          <p>{product?.description}</p>
          <h3>
            price: <span className="text-danger">${product?.price}</span>
          </h3>
          <div className="d-flex justify-content-between">
            <Button className="btn btn-outline-dark" onClick={()=>handleWishlist(product)}>
              <i class="fa-solid fa-heart text-danger"></i>wishlist
            </Button>
            <Button className="btn btn-outline-dark">
              <i class="fa-solid fa-cart-plus text-light"></i>Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
