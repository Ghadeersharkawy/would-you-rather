import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {
  handleInitialData} from './actions/shared';
import Login from './components/Login'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div >
       <Login/>
      </div>
    );
  }

}

export default connect()(App);
