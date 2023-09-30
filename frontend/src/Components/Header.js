import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Header = () => {

  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-3  ">
        <Container fluid >
          <Navbar.Brand href="#" className='fs-1'>Mobile<span className='text-primary'>Shop</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto mb-2  my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav>
                <Link className='text-primary kkk' to="/">Home</Link>
                <Link to="/about" className="kkk" >About</Link>
                <Link to="/product" className="kkk" >Product</Link>
                
                  <Link to="/addkart" className="kkk" >
                    <div className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                      </svg>
                      <div className='rrrt'>3</div>
                    </div></Link>
               

              </Nav>
              &nbsp;&nbsp;<Col xs="auto" >
                <Button variant="success" ><Link to="/login" className="ktk">login</Link></Button>
              </Col>&nbsp;
              <Col xs="auto">
                <Button><Link to="/signup" className="ktk">Register</Link></Button>
              </Col>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header