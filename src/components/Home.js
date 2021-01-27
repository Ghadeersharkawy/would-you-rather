import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row, Col, Card, Image, Tabs, Tab } from 'react-bootstrap'
import User from './User';
import Question from './Question';


class Home extends Component {
    render() {
        console.log('home', this.props)
        const { users, authedUser, questions } = this.props;
        const answeredIds = Object.keys(users[authedUser].answers);
        const answeredQuestions = Object.values(questions).filter(ques => answeredIds.includes(ques.id))
        const notAnsweredQuestions = Object.values(questions).filter(question => !answeredIds.includes(question.id))
        console.log('answeredIds', answeredIds)
        console.log('answeredquestions', answeredQuestions)
        return (
            <div className="home">
               
                <Container>
                    <Row className="justify-content-center">

                        <Col xs lg='6'>
                            <Tabs defaultActiveKey="notAnswered" id="uncontrolled-tab-example">
                                <Tab eventKey="notAnswered" title="Not Answered">
                                    {notAnsweredQuestions.map((notAnsdId) => (

                                        <Card className='user_cards question mb-3' key={notAnsdId.id}>
                                            <Card.Body>
                                                <User userId={notAnsdId.author} />
                                                <Question question={notAnsdId} />

                                            </Card.Body>
                                        </Card>

                                    ))}
                                </Tab>
                                <Tab eventKey="answered" title="Answered">
                                    {answeredQuestions.map((ansdId) => (
                                        <Card className='user_cards question mb-3' key={ansdId.id}>
                                            <Card.Body>
                                                <User userId={ansdId.author} />
                                                <Question question={ansdId} />
                                            </Card.Body>
                                        </Card>
                                    ))}

                                </Tab>

                            </Tabs>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
function mapStateToProps({ questions, authedUser, users }) {

    return {
        questions,
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(Home)