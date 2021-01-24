import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import {
  handleInitialData} from './actions/shared';
import Login from './components/Login'
import Home from './components/Home'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div >
     <Home/>
       {/* <Login/> */}
      </div>
    );
  }

}

export default connect()(App);
