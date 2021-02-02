import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import { addQuestionAnswer } from '../actions/questions'
import User from './User';
import Results from './Results';


export class QuestionDetails extends Component {
    state = {
        value: '',
    };

    handleChange = (e) =>{
     this.setState({ value:e.target.value })};

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.value)
        console.log(this.props)
        if (this.state.value !== '') {
            const { authedUser, question, addQuestionAnswer } = this.props;
            console.log(this.props.authedUser)
            addQuestionAnswer(authedUser, question.id, this.state.value);
           
        }
    };

    render() {
        const {question} = this.props;
         console.log('Question Details', question)
        
        return (
            <div className="question_details--component">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs lg='6'>
                            <Card className='user_cards question mb-3' >
                            <User userId={question.author} />
                                <div className='question_details'>
                                    <div className="question_details--name" className="question_details--name">
                                        <h5 className="mb-4">Would you Rater....?</h5>
                                        <Form onSubmit={this.handleSubmit}>
                                        <div className="option_one">
                                           
                                            <Form.Group controlId="formBasicCheckboxOne">
                                                <Form.Check
                                                 type="radio"
                                                 label={question.optionOne.text}
                                                  value="optionOne"
                                                  checked={this.state.value === 'optionOne'}
                                                  onChange={this.handleChange} />
                                            </Form.Group>
                                        </div>
                                            OR<br/>
                                        <div className="option_two">
                                            <Form.Group controlId="formBasicCheckboxTwo">
                                                <Form.Check type="radio" 
                                                label={question.optionTwo.text}
                                                 value="optionTwo" 
                                                 checked={this.state.value === 'optionTwo'}
                                                 onChange={this.handleChange}/>
                                            </Form.Group>
                                            <Button className="my-1 poll_button" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                        </Form>
                                    </div>


                                </div>
                            </Card>

                            <Results  question={question}></Results>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


function mapStateToProps({ authedUser, questions }, { match, question_id }) {
    let question;
    if (question_id !== undefined) {
        question = questions[question_id];
    } else {
        const { question_id } = match.params;
        question = questions[question_id];
    }
    return {
        authedUser,
        question,
    };
}

export default connect(mapStateToProps, { addQuestionAnswer })(QuestionDetails)
