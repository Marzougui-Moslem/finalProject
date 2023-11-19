import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './ShoppingNavbar.css';
import { Link } from 'react-router-dom';
function Navbarr({produit}) {
  return (
    <div>
    <Navbar bg="dark" expand="lg" variant="dark" className="custom-navbar">
      <Navbar.Brand href="/">MSLM-SHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/" style={{textDecoration:"none", color:"white"}}>Products</Link></Nav.Link>
          <Nav.Link ><Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></Nav.Link>
          <Nav.Link><Link to="/about" style={{textDecoration:"none", color:"white"}}>About</Link></Nav.Link>
        </Nav>
        <Form inline className="search-form">
          <FaSearch className="search-icon" />
          <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
        </Form>
        <Nav>
          <Nav.Link href="/cart">
            <FaShoppingCart className="cart-icon" />
            <Link to="/cart" >Cart</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      
    </div>
  )
}

export default Navbarr
