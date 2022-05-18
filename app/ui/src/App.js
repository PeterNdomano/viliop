import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { tellUser } from './Helper';
import TTab from './main-tabs/TTab';
import PTab from './main-tabs/PTab';
import CTab from './main-tabs/CTab';


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <ToastContainer/>
        <TTab/>
        <PTab/>
        <CTab/>
      </div>
    )
  }
}
