import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';


class AddQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }
    handleChanges = (e, {name, value}) => {
		this.setState({
			[name]: value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const {optionOne, optionTwo} = this.state;
		const {dispatch} = this.props;

		dispatch(handleAddQuestion({optionOne, optionTwo}));

		this.setState({
			optionOne: '',
			optionTwo: ''
		});

		this.props.history.push(`/`);
	};

    render() {
        const {optionOne, optionTwo} = this.state;
       
        return (
            <div className="add_question">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs lg='6'>
                            <Card>
                                <Card.Header><h4>Add New Question</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title><h5>Would You Rather</h5></Card.Title>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Control type="text" name='optionOne' value={optionOne} placeholder="Enter Option One Text" onChange={this.handleChanges}/>
                                            <Card.Text className='mt-3'>OR</Card.Text>
                                            <Form.Control type="text"  name='optionTwo' value={optionTwo} placeholder="Enter Option Two Text" onChange={this.handleChanges}/>
                                        </Form.Group>

                                    </Form>
                                    <Button variant="primary" disabled={optionOne === '' || optionTwo === ''} >Submit</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


function mapStateToProps({ authedUser }) {
    return {
      authedUser
    };
  }
  
  export default connect(mapStateToProps)(AddQuestion)