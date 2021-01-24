import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card,Image } from 'react-bootstrap'

class LeaderBoard extends Component {
    render() {
     
        console.log('Props:',this.props)
        return (
            <div className="leader_Board">
                <Row>
                    <Col>
                        {this.props.users.map((user) => (
                            <Card className='user_cards mb-3' key={user.id}>

                                <Card.Body>
                                    <div className='user_avatar'>
                                        <Image src={user.avatarURL} roundedCircle />

                                    </div>
                                    <div className='user_details'>
                                        <div className="user_details--name"className="user_details--name">
                                            <h4>{user.name}</h4>
                                        </div>
                                        <div className="user_details--questions">
                                            <p>Answered Questions:<strong> {Object.keys(user.answers).length}</strong></p>
                                            <p>Created Questions : <strong>{user.questions.length}</strong></p>
                                        </div>

                                    </div>
                                    <div className='user_score'>
                                        <h5>Score</h5>
                                        {Object.keys(user.answers).length + user.questions.length}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}


                    </Col>
                </Row>



            </div>

        )
    }
}

function mapStateToProps({ users }) {
    return {
        users:Object.values(users)
    }
}

export default connect(mapStateToProps)(LeaderBoard)