import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap'
import { addQuestionAnswer } from '../actions/questions'
import User from './User';
import Results from './Results';


export class QuestionDetails extends Component {
    state = {
        value: '',
        displayResult: false
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = e => {
         e.preventDefault()
        this.setState(prevState => ({
            displayResult: !prevState.displayResult
          }));
        if (this.state.value !== '') {
            const { authedUser, question, addQuestionAnswer } = this.props;
            addQuestionAnswer(authedUser, question.id, this.state.value);

        }
    };

    render() {
        const { question, displayResult } = this.props;
        if(displayResult) {
        //  this.setState({displayResult: displayResult})
        }
        console.log("display: ", displayResult, this.props);
        return (
            <div className="question_details--component">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs lg='6'>
                            {
                                this.state.displayResult || displayResult ?
                                    (


                                    <Results question={question} />




                                    ) : (

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
                                            OR<br />
                                                        <div className="option_two">
                                                            <Form.Group controlId="formBasicCheckboxTwo">
                                                                <Form.Check type="radio"
                                                                    label={question.optionTwo.text}
                                                                    value="optionTwo"
                                                                    checked={this.state.value === 'optionTwo'}
                                                                    onChange={this.handleChange} />
                                                            </Form.Group>
                                                            <Button className="my-1 poll_button" type='submit'>
                                                                Submit
                                            </Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Card>
                                    )}
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


function mapStateToProps({ authedUser, questions }, { match, question_id, answered }) {
    let question;
    let displayResult;
    if (question_id !== undefined) {
        question = questions[question_id];
    } else {
        const { question_id, answered } = match.params;
        question = questions[question_id];
        console.log("params: ", match.params)
        displayResult = answered === 'true' ? true : false;
    }
    return {
        authedUser,
        question,
        displayResult
    };
}

export default connect(mapStateToProps,{ addQuestionAnswer })(QuestionDetails)
