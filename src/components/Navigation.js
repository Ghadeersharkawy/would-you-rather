import React, { Component } from 'react'
import { Nav, Navbar, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

  handelLogout = (e) => {
    e.preventDefault();
    this.props.setAuthedUser(null);
  }
  render() {
    const { users, authedUser } = this.props;
    const uid = users.filter((user) => {
      return user.id === authedUser
    })
    return (
      <div className="navigation">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                
                  <NavLink to="/" exact>Home</NavLink>
               
              </Nav.Item>
              <Nav.Item>
               
                  <NavLink to="/add" >New Question</NavLink>
                
              </Nav.Item>
              <Nav.Item>
               
                  <NavLink to="/leaderboard" >Leaderboard</NavLink>
                
              </Nav.Item>
            </Nav>
            <Nav className="signed_user">
              <Navbar.Text>
                Signed in as:<div className="signed_user-details">
                  <Image
                    src={uid[0].avatarURL}
                    className='signed_user-avatar' />
                  <div className="signed_user-name">{uid[0].name}</div>
                </div>

              </Navbar.Text>
             
                <Button className="my-1" onClick={this.handelLogout}>
                  Logout
                                </Button>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users: Object.values(users)
  }
}

export default connect(mapStateToProps, { setAuthedUser })(Navigation) 
