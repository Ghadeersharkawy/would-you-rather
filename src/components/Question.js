import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';


class Question extends Component {
    // state = {
    //     viewPoll: false
    //   }
    // handelPollView =(e)=>{
        
    //   };
    render() {
        const {question}=this.props;
        // console.log('question',question)
        // if (this.state.viewPoll === true) {
        //     return <Redirect push to={`/questions/${question.id}`} />;
        //   }
        return (
            <div className="question">
                <div className='question_details'>
                    <div className="question_details--name" className="question_details--name">
                        <h5 className="mb-4">Would you Rater....?</h5>
                        <div className="option_one">
                            {question.optionOne.text}
                        </div>
                        OR
                        <div className="option_two">
                        ...
                        <Button  className="my-1 poll_button"  onClick={this.handelPollView}>
                                    View Poll
                        </Button>
                        </div>
                       
                    </div>


                </div>
            </div>
        )
    }
}

export default Question