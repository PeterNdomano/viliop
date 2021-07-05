import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';


class MainLogin extends Component {

  constructor(props){
    super(props);
  }

  login = (e) => {
    e.preventDefault();
    let phone = $('#phone').val();
    let password = $('#password').val();

    if(phone.trim().length > 0){
      if(password.trim().length > 0){
        this.props.showLoader(true);
        $.post(MAIN_URL + 'login.php', { phone, password }, (data, status) => {
          this.props.showLoader(false);
          if(status === 'success'){
            //console.log(data);
            let response = JSON.parse(data);
            if(response.status === 1){
              this.props.authCallback();
            }
            else{
              toast.message(response.msg);
            }
          }
          else{
            toast.message("Connection error");
          }
        });
      }
      else{
        toast.message("Invalid password");
      }
    }
    else{
      toast.message("Invalid username");
    }
  }
  render() {
    return (
      <div className="MainLogin">
        <div className="loginBox">
          <form onSubmit={ (e) => {
            this.login(e);
          }}>
            <h2>Welcome Back!</h2>
            <div className="form-group">
              <label>Username</label>
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

export default MainLogin;
