import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';


class MainIntro extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="MainIntro">
        <div className="introBox">
          <h2>Welcome Back!</h2>
        </div>
      </div>
    );
  }
}

export default MainIntro;
