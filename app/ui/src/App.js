import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { tellUser } from './Helper';
import 'react-toastify/dist/ReactToastify.css';


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ToastContainer/>

        <h1 onClick={() => { tellUser('Hey there...') }}>Welcome dear user</h1>
      </div>
    )
  }
}
