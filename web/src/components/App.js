import React, { Component } from 'react';
import logo from '../logo.svg';
import MainLoader from './MainLoader';
import MainLogin from './MainLogin';
import MainRegister from './MainRegister';
import MainBody from './MainBody';
import MainIntro from './MainIntro';
import SideBar from './SideBar';
import TopBar from './TopBar';
import $ from 'jquery';
import { MAIN_URL } from '../Helper';
import toast from 'siiimple-toast';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showLoader: false,
      auth: false,
      accountStatus: 0,
      navTo: 'new_client',
      signPageReq: null,
    }

  }

  componentDidMount(){
    this.authCallback();
  }

  showLoader = (show) => {
    this.setState({
      showLoader: show,
    })
  }

  navCallback = (navTo) => {
    this.setState({
      navTo: navTo,
    });
  }

  authCallback = (noisy = true) => {

    if(noisy){
      //handle noisy auth check
      this.showLoader(true);
      $.post(MAIN_URL + 'auth.php', { }, (data, status) => {
        this.showLoader(false);
        //console.log(data);
        if(status === 'success'){
          let response = JSON.parse(data);
          if(response.status === 1){
            this.setState({
              auth: true,
              accountStatus: response.accountStatus,
            })
          }
          else{
            toast.message(response.msg);
          }
        }
        else{
          toast.message('Connection error');
        }
      });
    }
    else{
      //just check auth without user noticing
      this.showLoader(true);
      $.post(MAIN_URL + 'auth.php', { }, (data, status) => {

        if(status === 'success'){
          let response = JSON.parse(data);
          if(response.status === 1){
            this.setState({
              auth: true,
              accountStatus: response.accountStatus,
            })
          }
          else{
            //toast.message(response.msg);
          }
        }
        else{
          //toast.message('Connection error');
        }
      });
    }
  }

  requestSignIn = () => {
    this.setState({
      signPageReq: 'signIn',
    })
  }

  requestSignUp = () => {
    this.setState({
      signPageReq: 'signUp',
    })
  }

  renderMainBody(){
    return (
      <div className="App">
        <MainLoader show={this.state.showLoader}/>
        <TopBar role={this.state.role} navCallback={this.navCallback}/>
        <SideBar role={this.state.role} navCallback={this.navCallback}/>
        <MainBody navTo={this.state.navTo} showLoader={this.showLoader} authCallback={this.authCallback} navCallback={this.navCallback}/>
      </div>
    )
  }

  renderLogin(){
    return (
      <div className="App">
        <MainLoader show={this.state.showLoader}/>
        <MainLogin requestSignUpCallback={this.requestSignUp} showLoader={this.showLoader} authCallback={this.authCallback}/>
      </div>
    )
  }

  renderRegister(){
    return (
      <div className="App">
        <MainLoader show={this.state.showLoader}/>
        <MainRegister requestSignInCallback={this.requestSignIn} showLoader={this.showLoader} authCallback={this.authCallback}/>
      </div>
    )
  }

  renderIntro(){
    return (
      <div className="App">
        <MainLoader show={this.state.showLoader}/>
        <MainIntro requestSignInCallback={this.requestSignIn} requestSignUpCallback={this.requestSignUp} showLoader={this.showLoader} authCallback={this.authCallback}/>
      </div>
    )
  }
  render() {
    if(this.state.auth){
      return this.renderMainBody();
    }
    else{
      if(this.state.signPageReq === null){
        return this.renderIntro();
      }
      else{
        if(this.state.signPageReq === 'signIn'){
          return this.renderLogin();
        }
        else if(this.state.signPageReq === 'signUp'){
          return this.renderRegister();
        }
        else{
          return this.renderIntro();
        }
      }
    }
  }
}

export default App;
