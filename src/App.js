import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {
  handleInitialData
} from './actions/shared';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div >
        starter Code
      </div>
    );
  }

}

export default connect()(App);
