import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    ProgressBar,
    Button
} from 'react-bootstrap';

const YourVoteLabel = () => (
    <label color="orange" ribbon="right" className="vote">
        {/* <Icon name="check circle outline" size="big" className="compact" /> */}
        <div style={{ float: 'right' }}>
            Your
      <br />
      Vote
    </div>
    </label>
);

export class PollResult extends Component {

    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        const { question, user } = this.props;
        console.log('Results', this.props)
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const votesTotal = optionOneVotes + optionTwoVotes;
        const userVote = user.answers[question.id];


        return (
            <Fragment>
                <h3>
                    Results:
          <div style={{ fontWeight: 'bold' }}>
                        Would you rather
          </div>
                </h3>
                <div className='optionOne'
                >
                    {userVote === 'optionOne' && <YourVoteLabel />}
                    <p style={{ fontWeight: 'bold' }}>{question.optionOne.text}</p>
                    <ProgressBar
                        now={((optionOneVotes / votesTotal) * 100).toFixed(2)}
                        variant="info"
                        label={` ${optionOneVotes} out of ${votesTotal} votes`}
/>
                       
          
                </div>
                <div className='optionTwo'

                >
                    {userVote === 'optionTwo' && <YourVoteLabel />}

                    <p style={{ fontWeight: 'bold' }}>{question.optionTwo.text}</p>
                    <ProgressBar
                        now={((optionTwoVotes / votesTotal) * 100).toFixed(2)}
                        label={` ${optionOneVotes} out of ${votesTotal} votes`}
                        />
         
                </div>
                <Button className="mt-4" onClick={this.handleClick}>
                    Back
        </Button>
            </Fragment>
        );
    }
}

function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser];
    return {
        user,

    };
}

export default withRouter(connect(mapStateToProps)(PollResult));