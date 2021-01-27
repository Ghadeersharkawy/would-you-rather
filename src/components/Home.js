import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import { Row,Col,Card,Image } from 'react-bootstrap'
import Navigation from './Navigation'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'

class Home extends Component {
    render() {
        console.log('home',this.props)
        return (
            <div className="home">
                <Navigation />
                <Container>
                    <Row className="justify-content-center">

                        <Col xs lg='6'>
                            {/* <AddQuestion/> */}
                            {/* <LeaderBoard/> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="notanswered-tab" data-bs-toggle="tab" href="#notanswered" role="tab" aria-controls="notanswered" aria-selected="true">NotAnswered</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="answered-tab" data-bs-toggle="tab" href="#answered" role="tab" aria-controls="answered" aria-selected="false">Answered</a>
                                </li>
                             
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="notanswered" role="tabpanel" aria-labelledby="notanswered-tab"> <Card className='user_cards mb-3' >
                                
                                <Card.Body>
                                    <div className='user_avatar'>
                                        {/* <Image src={} roundedCircle /> */}

                                    </div>
                                    <div className='user_details'>
                                        <div className="user_details--name" className="user_details--name">
                                            <h4></h4>
                                        </div>
                                        <div className="user_details--questions">
                                            <p>Answered Questions: <strong> </strong></p>
                                            <p>Created Questions : <strong></strong></p>
                                        </div>

                                    </div>
                                    <div className='user_score'>
                                        <h5>Score</h5>
                                       <strong></strong> 
                                    </div>
                                </Card.Body>
                            </Card></div>
                                <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="answered-tab"> <Card className='user_cards mb-3' >
                                <div className="award">
                                

                                </div>
                                <Card.Body>
                                    <div className='user_avatar'>
                                        {/* <Image src={} roundedCircle /> */}

                                    </div>
                                    <div className='user_details'>
                                        <div className="user_details--name" className="user_details--name">
                                            <h4></h4>
                                        </div>
                                        <div className="user_details--questions">
                                            <p>Answered Questions: <strong> </strong></p>
                                            <p>Created Questions : <strong></strong></p>
                                        </div>

                                    </div>
                                    <div className='user_score'>
                                        <h5>Score</h5>
                                       <strong></strong> 
                                    </div>
                                </Card.Body>
                            </Card></div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
function mapStateToProps({questions,authedUser}) {
    return {
        questions,
        authedUser
    }

}
export default connect(mapStateToProps)(Home)