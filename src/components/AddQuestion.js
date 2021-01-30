import React, { Component,Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions';


class AddQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
    }
    
    handleChanges = (e) => {
        
        console.log( {[e.target.name]: e.target.value} )
        this.setState({ [e.target.name]: e.target.value });
        console.log('state:',this.state)
      }
	handleSubmit = (e) => {
		e.preventDefault();

        const {optionOneText, optionTwoText} = this.state;
        console.log('state: Submit',this.state)
		const {dispatch} = this.props;
        console.log('before disptch props',{optionOneText, optionTwoText})
		dispatch(handleAddQuestion({optionOneText, optionTwoText}));

		this.setState({
			optionOneText: '',
			optionTwoText: ''
		});

		this.props.history.push(`/`);
	};

    render() {
        const {optionOneText, optionTwoText} = this.state;
       
        return (
            <div className="add_question">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs lg='6'>
                            <Card>
                                <Card.Header><h4>Add New Question</h4></Card.Header>
                                <Card.Body>
                                    <Card.Title><h5>Would You Rather</h5></Card.Title>
                                    <Fragment>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Control type="text" name='optionOneText' value={optionOneText} placeholder="Enter Option One Text" onChange={this.handleChanges}/>
                                            <Card.Text className='mt-3'>OR</Card.Text>
                                            <Form.Control type="text"  name='optionTwoText' value={optionTwoText} placeholder="Enter Option Two Text" onChange={this.handleChanges}/>
                                        </Form.Group>
                                        <Button variant="primary"  type="submit"   disabled={optionOneText === '' || optionTwoText === ''} >Submit</Button>
                                    </Form>
                                    </Fragment>

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