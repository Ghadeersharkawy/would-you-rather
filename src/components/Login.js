import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser';
import help from '../assets/help.png'

class Login extends Component {
   state={
       value:''
   }

   handleChange = (e) => {
const value = e.target.value
// console.log(value)
    this.setState(()=>({
        value
    }));
   
  };

    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.setAuthedUser(this.state.value);
    
    }
    render() {
        const {users} = this.props;
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
                                <Form.Control
                                    as="select"
                                    className="my-1 mr-sm-2"
                                    id="FormCustomSelectPref"
                                    custom
                                    defaultValue="Select a User..."
                                    onChange={this.handleChange}
                                >
                                    <option>Select a User...</option>
                                    {!users ? '':
                                    users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                           {user.name}
                                        </option>
                                    ))}


                                </Form.Control>
                                <Button  className="my-1" disabled={this.state.value === ''} onClick={this.handelSubmit}>
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
export default connect(mapStateToProps,{ setAuthedUser })(Login)