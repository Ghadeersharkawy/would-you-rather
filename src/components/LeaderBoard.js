import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container,Row, Col, Card, Image } from 'react-bootstrap'
import { Award } from 'react-bootstrap-icons';

class LeaderBoard extends Component {
    render() {

        const { leaderboard } = this.props;

        console.log('Props:', leaderboard)
        return (
            <div className="leader_board">
                <Container>
                <Row className="justify-content-center">
                    <Col xs lg='6'>
                        {leaderboard.map((user) => (
                            <Card className='user_cards mb-3' key={user.id}>
                                <div className="award">
                                <Award  size={30} className='leader_board--icon'/>

                                </div>
                                <Card.Body>
                                    <div className='user_avatar'>
                                        <Image src={user.avatarURL} roundedCircle />

                                    </div>
                                    <div className='user_details'>
                                        <div  className="user_details--name">
                                            <h4>{user.name}</h4>
                                        </div>
                                        <div className="user_details--questions">
                                            <p>Answered Questions: <strong> {user.answerCount}</strong></p>
                                            <p>Created Questions : <strong>{user.questionCount}</strong></p>
                                        </div>

                                    </div>
                                    <div className='user_score'>
                                        <h5>Score</h5>
                                       <strong>{user.total}</strong> 
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}


                    </Col>
                </Row>
                </Container>


            </div>

        )
    }
}

function mapStateToProps({ users }) {
    const leaderboard = Object.values(users)
        .map(user => ({
            id: user.id,
            name: user.name,
            avatarURL: user.avatarURL,
            answerCount: Object.values(user.answers).length,
            questionCount: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total).reverse()
    return {
        leaderboard
    }
}

export default connect(mapStateToProps)(LeaderBoard)