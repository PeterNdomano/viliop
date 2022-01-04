import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL, tellUser } from '../Helper';


class MainRegister extends Component {

  constructor(props){
    super(props);
  }



  register = (e) => {
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    let confirm = $('#confirm').val();

    if(email.trim().length > 0){
      if(password.length >= 8){
        if(password === confirm){
          this.props.showLoader(true);
          $.post(MAIN_URL+'register.php', { email, password }, (data, status) => {
            this.props.showLoader(false);
            if(status === 'success'){
              let response = JSON.parse(data);
              if(response.status === 1){
                this.props.authCallback();
              }
              else{
                tellUser(response.msg, 'w');
              }
            }
            else{
              tellUser('Network error, cannot connect to the server', 'w');
            }
          });
        }
        else{
          tellUser('Please confirm your password correctly', 'w');
        }
      }
      else{
        tellUser('Password must have 8 characters or more', 'w');
      }
    }
    else{
      tellUser('Invalid email address', 'w');
    }
  }


  render() {
    return (
      <div className="MainLogin">
        <div className="loginBox">
          <form onSubmit={ (e) => {
            this.register(e);
          }}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" required id="email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" required id="password"/>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input className="form-control" type="password" required id="confirm"/>
            </div>

            <div className="form-group text-right">
              <button className="btn"> Register <MdLogin/>  </button>
            </div>

            <hr/>
            <div className="form-group">
              <h6>Or <a onClick={
                () => {
                  this.props.requestSignInCallback()
                }
              }>Sign In </a> Instead</h6>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default MainRegister;
