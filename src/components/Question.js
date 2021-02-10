import React, { Component,Fragment } from 'react'
import {Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';


class Question extends Component {
     state = {
       viewPoll: false,
       viewResults: false
       }
     handelPollView =(e)=>{
       console.log('viewPoll', this.state.viewPoll);

         if(this.props.answered){
           this.setState({
               viewPoll: true,
               viewResults: true
             });
        } else if (this.props.answered === false) {
            console.log('Else');
            this.setState(prevState => ({
                viewPoll: !prevState.viewPoll
              }));
        }

       }
    render() {
        const {question}=this.props;
         console.log('answered: ',this.props.answered)
         if (this.state.viewPoll ) {
             return <Redirect push to={`/questions/${question.id}/${this.state.viewResults}`} />;
            }

        return (

            <div className="question">
                <Fragment>
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
                                  {!this.props.answered? 'View Poll' :'View Results' }
                        </Button>
                        </div>

                    </div>


                </div>
                </Fragment>
            </div>

        )
    }
}

export default Question
