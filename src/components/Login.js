import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, Button, DropdownButton,Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import help from '../assets/help.png'

class Login extends Component {
    // state={
    //     value
    // }
    render() {
        return (
            <div className='login'>
                <Container>
                    <Row className="justify-content-center">

                        <Col xs lg='6' className="text-center">

                            <h2 className="game_name my-3 ">Would You Rather</h2>
                            <div className='logo my-2 '>
                                <img src={help} alt="game logo" />
                            </div>

                            <Form >
                                <Form.Label className="my-1 mr-2" htmlFor="FormCustomSelectPref">
                                    <h2 className="signIn">Sign In</h2>
                                </Form.Label>




                                <DropdownButton
                                    menuAlign={{ lg: 'center' }}
                                    title="choose"
                                    id="dropdown-menu-align-responsive-1"
                                    className='login_dropdown'
                                >
                                    {this.props.users.map((user) => (
                                        <Dropdown.Item Key={user.id} eventKey={user.id}>
                                            <img className='img-responsive user_avatar' src={user.avatarURL} alt='user avatar' />{user.name}
                                        </Dropdown.Item>
                                       
                                    ))}


                                </DropdownButton>
                                <Button type="submit" className="my-1">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}
export default connect(mapStateToProps)(Login)