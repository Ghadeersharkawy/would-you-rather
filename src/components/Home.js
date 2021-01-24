import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddQuestion from './AddQuestion'
import Navigation from './Navigation'
import LeaderBoard from './LeaderBoard'

function Home() {
    return (
        <div className="home">
            <Navigation />
            <Container>
                <Row className="justify-content-center">

                    <Col xs lg='6'>
                    {/* <AddQuestion/> */}
                    <LeaderBoard/>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Home