import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';


class MainRegister extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="MainLogin">
        <div className="loginBox">
          <form onSubmit={ (e) => {
            this.login(e);
          }}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="text" required id="phone"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" required id="password"/>
            </div>

            <div className="form-group text-right">
              <button className="btn"> Login <MdLogin/>  </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default MainRegister;
