import React, { Component } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';


class TopBar extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //console.log($(window).width());
    // if($(window).width() > 760){
    //   this.openMenu()
    // }
  }

  openMenu(){
    $('#mainBody').removeClass('openedMainBody');
    $('#mainBody').addClass('closedMainBody');

    $('#sideBar').removeClass('closedSideBar');
    $('#sideBar').addClass('openedSideBar');

    $('#openMenuBtn').css('display', 'none');
    $('#closeMenuBtn').css('display', 'block');
  }

  closeMenu(){
    $('#mainBody').removeClass('closedMainBody');
    $('#mainBody').addClass('openedMainBody');

    $('#sideBar').removeClass('openedSideBar');
    $('#sideBar').addClass('closedSideBar');

    $('#openMenuBtn').css('display', 'block');
    $('#closeMenuBtn').css('display', 'none');
  }

  render() {
    return (
      <div className="TopBar">
        <div className="container">
          <div className="d-flex flex-row">
            <div id="openMenuBtn" className="p-2 align-self-center"><MdMenu size={30} color="var(--accentColor)" onClick={ () => this.openMenu() }/></div>
            <div id="closeMenuBtn" className="p-2 align-self-center"><MdClose size={30} color="var(--accentColor)"  onClick={ () => this.closeMenu() }/></div>
            <h3 className="align-self-center" style={{ paddingTop: "10px", fontSize: "25px", color: "var(--accentColor)"}}>Viliop</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
