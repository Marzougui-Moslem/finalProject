import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import './ExtraordinaryShoppingCard.css';

import { Link } from 'react-router-dom';




function Productcard({el, addProduct, setaddProduct}) {

  
  return (
    <div>
    
<Card className="extraordinary-card">
      <div className="card-image-container">
        <Card.Img className="card-image" variant="top" src={el.url} />
        <div className="cart-overlay">
          <Button  onClick={()=>setaddProduct([...addProduct,el])} variant="primary" className="cart-button">
            <FaShoppingCart /> Add to Cart
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text className="price">{el.prix}</Card.Text>
        <Link to={`/details/${el.id}`} style={{textDecoration:"none", color:"black"}}> <Button>read more</Button> </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Productcard
