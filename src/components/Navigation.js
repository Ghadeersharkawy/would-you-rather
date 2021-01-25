import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to="/add" component={AddQuestion}> New Question</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to="/leaderboard" component={LeaderBoard}>   Leaderboard</Link>

              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Nav.Link href="#memes">
              LogOut
    </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation
