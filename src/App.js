import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {
  handleInitialData} from './actions/shared';
import Login from './components/Login'
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        
      <div >
      {authedUser === null ? (
            <Route
              render={() => (
               
                  <Login />
              
              )}
            />
          ) : (
            <Fragment>
             
             
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddQuestion} />
                <Route exact path="/leaderboard" component={LeaderBoard} />
              
            </Fragment>
          )}
      </div>
      </Router>
    );
  }

}


function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(
  mapStateToProps
 
)(App);
