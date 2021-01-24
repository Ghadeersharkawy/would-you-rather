import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class AddQuestion extends Component {
    render() {
        return (
            <div className="add_question">

                <Card>
                    <Card.Header><h4>Add New Question</h4></Card.Header>
                    <Card.Body>
                        <Card.Title><h5>Would You Rather</h5></Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter Option One Text" />
                                <Card.Text className='mt-3'>OR</Card.Text>
                                <Form.Control type="text" placeholder="Enter Option Two Text" />

                            </Form.Group>
                            
                        </Form>
                        <Button variant="primary"  type="submit">Submit</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

function mapStateToProps() {

}

export default connect()(AddQuestion)