import React from 'react'
import { Card,Button } from 'react-bootstrap'

function Home() {
  return (
    <div style={{marginTop:"50px"}} className='container-fluid'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/illustration-happy-anniversary-gift-box-present-banner_53876-147692.jpg?t=st=1731569546~exp=1731573146~hmac=63230d654147df7abe0d53255aa0397e8c55cf952de29d3f1411fecc994f96b1&w=740" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button className="btn btn-light">        
                      <i class="fa-solid fa-cart-shopping text-danger"></i>
          </Button>
          <Button className="btn btn-light">
          <i class="fa-solid fa-heart text-danger"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home