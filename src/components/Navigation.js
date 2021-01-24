import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation(){
    return(
        <div className="navigation">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="">Home</Nav.Link>
    <Nav.Link href="">New Question</Nav.Link>
    <Nav.Link href="">Leader Board</Nav.Link>
    
  </Nav>
  <Nav>
  <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    <Nav.Link  href="#memes">
      LogOut
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
        </div>
    );
}

export default Navigation
