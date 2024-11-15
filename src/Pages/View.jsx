import { Button } from "react-bootstrap"

function View() {
  return (
    <>
    <div className="container mt-5 row ms-5">                
      <div className="col-lg-4">
        <img src="https://plus.unsplash.com/premium_photo-1664872566732-d5a16add5989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:"100%"}} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">
        <p>pid:4156789</p>
        <h1>produc Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit obcaecati delectus officiis quisquam eum illo, reiciendis placeat! Consectetur aliquid quos iste iure, nobis asperiores doloremque incidunt vitae eum nemo a!
        Saepe, ad. Obcaecati esse deserunt ipsa consectetur, alias eos debitis quaerat culpa quo nam, quam, nisi aliquid officia saepe ad cupiditate. In molestias modi voluptatibus obcaecati tempora nobis, consectetur consequatur?
        Nostrum in rem porro, consequatur alias numquam saepe, dolorem perferendis tenetur non velit obcaecati molestiae aliquid veritatis quae eaque pariatur. Quisquam provident, voluptates consectetur ipsum perferendis quaerat ducimus ipsam odio.</p>
        <h3>price: <span className='text-danger'>$895</span></h3>
        <div className="d-flex justify-content-between">
          <Button className='btn btn-outline-dark'><i class="fa-solid fa-heart text-danger" ></i>wishlist</Button>
          <Button className='btn btn-outline-light'><i class="fa-solid fa-cart-plus text-info" ></i>Cart</Button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default View  