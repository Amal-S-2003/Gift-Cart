import React from "react";

function Cart() {
  return (
    <div>
      <div className="row container">
        <div className="col-lg-1"></div>
        <div className="col-lg-7">
          <div className="table shadow mt-5">
            <table className="w-100">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Product</td>
                <td>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664872566732-d5a16add5989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={"70%"}
                    height={"200px"}
                    alt=""
                  />
                </td>
                <td>$895</td>
                <td>
                  <button className="btn">
                    <i class="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="card shadow rounded mt-5 p-5 w-100">
            <h2 className="text-dark fw-bolder">Cart Summary</h2>
            <h3>
              <span className="text-dark fw-bolder">Total Products</span>3
            </h3>
            <h3>
              Total Price: <span className="text-danger fw-bolder">$1000</span>
            </h3>
          </div>
          <div className="d-grid">
            <button className="btn btn-success mt-2">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
