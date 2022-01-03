import React, { Component } from 'react';
import logo from '../logo.svg';
import MainLoader from './MainLoader';
import MainLogin from './MainLogin';
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
      role: null,
      navTo: 'new_client',
    }

  }

  componentDidMount(){
    //this.authCallback();
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

  authCallback = () => {
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
            role: response.role,
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
        <MainLogin showLoader={this.showLoader} authCallback={this.authCallback}/>
      </div>
    )
  }

  renderIntro(){
    return (
      <div className="App">
        <MainLoader show={this.state.showLoader}/>
        <MainIntro showLoader={this.showLoader} authCallback={this.authCallback}/>
      </div>
    )
  }
  render() {
    return this.renderIntro();
  }
}

export default App;
